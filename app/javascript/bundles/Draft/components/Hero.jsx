import React from "react";
import PropTypes from "prop-types";
import BannedHeros from "./BannedHeros";
import {Actions, ActionType} from "../types";

const Hero = (props) => {
    if (props.button) {
        let btn_class = ''
        if (props.action === Actions.PICK_HERO) {
            btn_class = 'btn-primary'
        } else if (props.action === Actions.BAN_HERO) {
            btn_class = 'btn-danger'
        } else {
            btn_class = 'btn-transparent'
        }
        return (
            <button disabled={!props.enabled}
                    onClick={() => props.callback()}
                    className={`m-2 btn-sm btn ${btn_class}`}
                    key={props.name}>
                {props.name}
            </button>
        )
    } else {
        return (
            <li key={props.name}>
                {props.name}
            </li>
        )
    }
}

Hero.propTypes = {
    name: PropTypes.string.isRequired,
    button: PropTypes.bool,
    enabled: PropTypes.bool,
    callback: PropTypes.func,
    action: ActionType
}

export default Hero