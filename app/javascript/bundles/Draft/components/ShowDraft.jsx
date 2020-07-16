import React from 'react';
import createChannel from "../../../channels/consumer"
import PropTypes from 'prop-types';
import Team from './Team'
import Heros from './Heros'
import Players from './Players'
import Step from './Step'
import UnpickedPlayers from "./UnpickedPlayers";
import {Actions} from "../types";
import BannedHeros from "./BannedHeros";

export default class ShowDraft extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        current_user: PropTypes.shape({
                uuid: PropTypes.string,
                username: PropTypes.string,
            }
        )
    };


    // Here me out, it's redux but the server is the reducer and it updates the client states
    // via action cable. Hot mess? Yes. Fun? Also yes.
    dispatch = (payload) => {
        console.info("DISPATCH", payload)
        let auth_token = document.querySelector("meta[name='csrf-token']").content;
        fetch("/drafts/" + this.props.id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-Token': auth_token,
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(payload),
            credentials: 'same-origin',
        })
    }

    isCapA() {
        return this.state.draft_state &&
            this.state.draft_state.teams.A.players[0].uuid === this.props.current_user.uuid
    }

    isCapB() {
        return this.state.draft_state && this.state.draft_state.teams.B.players.length > 0 &&
            this.state.draft_state.teams.B.players[0].uuid === this.props.current_user.uuid
    }

    capOf() {
        if (this.isCapA()) {
            return "A"
        } else if (this.isCapB()) {
            return "B"
        } else {
            return null
        }
    }

    constructor(props) {
        super(props);
        this.state = {loaded: false, draft_state: null}
    }

    componentDidMount() {

        const updatedSt = (st) => {
            this.setState({draft_state: st})
        }

        const chat = createChannel({
            channel: "ActiveDraftChannel",
            room_id: this.props.id
        }, {
            received(data) {
                updatedSt(data.draft.state)
            }
        });
    }

    current_step() {
        if (this.state.draft_state.step === this.state.draft_state.steps.length) {
            return null
        } else {
        return this.state.draft_state.steps[this.state.draft_state.step]
        }
    }

    render() {
        if (this.state.draft_state !== null) {
            const {draft_state} = this.state
            const {teams} = draft_state
            const myTurn = this.capOf() === (this.current_step() || {}).team
            return (
                <div>
                    <div className={'ml-3 mr-3 card p-4'}>
                        <Step step={this.current_step()}/>
                    </div>
                    <UnpickedPlayers
                        dispatch={this.dispatch}
                        myTurn={myTurn}
                        teamAction={this.current_step()}
                        players={draft_state.players}
                    />
                    <div className={'d-flex justify-content-center row'}>

                        <div className={'mt-2 col-md-3 shadow-lg'}>
                            <div className={'h-100 card p-4'}>
                                <h4>Team A</h4>
                                <Team {...teams.A} />
                            </div>
                        </div>

                        <div className={'row col-md-6'}>
                            <div className={'mt-2 w-100 card p-4'}>
                                <h4>Heros</h4>
                                <Heros
                                    dispatch={this.dispatch}
                                    myTurn={myTurn}
                                    teamAction={this.current_step()}
                                    heros={draft_state.heros}/>
                            </div>
                            <div className={'mt-2 w-100 card p-4'}>
                                <h4>Banned Heros</h4>
                                <BannedHeros heros={draft_state.banned_heros}/>
                            </div>
                        </div>


                        <div className={'mt-2 col-md-3'}>
                            <div className={'h-100 card p-4'}>
                                <h4>Team B</h4>
                                <Team {...teams.B} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={'d-flex justify-content-center row'}>
                    <h1>Loading Draft...</h1>
                </div>
            )
        }

    }
}
