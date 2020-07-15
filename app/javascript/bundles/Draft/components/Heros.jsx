import React, {useCallback} from "react";
import PropTypes from "prop-types";
import Hero from './Hero'
import None from "./None";
import {Actions, TeamActionType} from "../types";

const Heros = props => {
        const {heros, dispatch, teamAction} = props

        const enabled = props.myTurn &&
            (teamAction.action == Actions.BAN_HERO || teamAction.action == Actions.PICK_HERO)

        if (heros && heros.length > 0) {
            return (
                <div>
                    <div className={'d-flex justify-content-start flex-wrap '}>
                        {heros.map((hero, index) =>
                            <Hero button={true}
                                  action={teamAction.action}
                                  enabled={enabled}
                                  callback={() => dispatch({index})}
                                  key={hero} name={hero}/>
                        )}
                    </div>
                </div>
            )
        } else {
            return (
                <None/>
            )
        }
}

Heros.propTypes = {
    teamAction: TeamActionType.isRequired,
    myTurn: PropTypes.bool.isRequired,
    heros: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default Heros