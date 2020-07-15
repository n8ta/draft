import React from "react";

const TeamMember = (props) => {

    return (
        <li className={props.index ===  0 ? 'font-weight-bold' : '' }>
            {props.username}
        </li>
    )
}

export default TeamMember