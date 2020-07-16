import React from "react";
import {ActionType, UserType, Actions, TeamActionType} from "../types";
import PropTypes from "prop-types";
import None from "./None";


const UnpickedPlayers = (props) => {
    const action = props.teamAction.action

    const enabled =
        (props.players && props.players.length > 0) &&
        props.myTurn &&
        (action === Actions.PICK_PLAYER || action === Actions.PICK_CAPTAIN)

    return (
        <div className={'ml-3 mr-3 card p-4 mt-2'}>
            <h4>Unpicked Players</h4>
            <ul className={'unpicked_players_list '}>
                {(props.players && props.players.length > 0) ?
                    props.players.map((player, index) =>
                        <li key={player.uuid} className={'m-1'}>
                            <button disabled={!enabled}
                                    onClick={() => props.dispatch({index})}
                                    className={'btn btn-sm btn-primary'}>
                                <span className={'font-weight-bold'}>+</span> {player.username}
                            </button>
                        </li>
                    ) :
                    <p>No other players...</p>
                }
            </ul>
        </div>
    )
}
UnpickedPlayers.propTypes = {
    teamAction: TeamActionType.isRequired,
    myTurn: PropTypes.bool.isRequired,
    players: PropTypes.arrayOf(UserType).isRequired,
    dispatch: PropTypes.func.isRequired,
}
export default UnpickedPlayers
