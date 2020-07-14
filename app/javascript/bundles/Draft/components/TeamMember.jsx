import React from "react";

const TeamMember = (props) => {
    console.info(props)
    return (
        <li key={props.uuid}>
            {props.username}
        </li>
    )
}

export default TeamMember