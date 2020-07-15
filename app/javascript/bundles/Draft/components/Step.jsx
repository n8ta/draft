import React from 'react';
import PropTypes from 'prop-types';
import {Actions, StepType} from "../types";

const Step = props => {
    if (props.step) {
        const {step} = props
        const action_text = action_strings[step.action]
        const team = step.team
        if (step.type === Actions.DONE) {
            return (
                <div className={'text-center'}>
                    <h3>All Done!</h3>
                    <p>Send any feedback or bug reports to Iroh on Discord.</p>
                </div>)
        }
        return (
            <div>
                <h3 className={'text-center'}>
                    <span className={'text-strong'}>Captain {team}: </span>
                    <span>{action_text}</span>
                </h3>
                <div className={'text-center text-muted text-light text-small'}> This box explains the current draft
                    step
                </div>
            </div>
        )
    } else {
        return (<></>)
    }
}

const action_strings = {
    "PICK_CAPTAIN": "Pick second captain",
    "PICK_PLAYER": "Pick a player",
    "PICK_HERO": "Pick a hero",
    "BAN_HERO": "Ban a hero",
}

Step.propTypes = {
    step: StepType,
}

export default Step