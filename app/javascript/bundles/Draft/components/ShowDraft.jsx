import React from 'react';
import createChannel from "../../../channels/consumer"
import PropTypes from 'prop-types';
import Team from './Team'

export default class ShowDraft extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
    };


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
                console.info(data)
                updatedSt(data.draft.state)
            }
        });
    }


    render() {
        if (this.state.draft_state !== null) {
            const {teamA, teamB} = this.state.draft_state
            return (
                <div className={'d-flex justify-content-center row'}>
                    <div className={'col-md-3'}>
                        <div className={'card p-4'}>
                            <h4>Team A</h4>
                            <Team {...teamA} />
                        </div>
                    </div>
                    <div className={'col-md-3'}>
                        <div className={'card p-4'}>
                            <h4>Heros</h4>
                        </div>
                    </div>
                    <div className={'col-md-3'}>
                        <div className={'card p-4'}>
                            <h4>Banned Heros</h4>
                        </div>
                    </div>
                    <div className={'col-md-3'}>
                        <div className={'card p-4'}>
                            <h4>Team B</h4>
                            <Team {...teamB} />
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
