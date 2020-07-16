import React from "react";
import None from "./None";

const SelectDraft = (props) => {
    if (props.drafts.length > 0) {
        return (
            <ul>
                {props.drafts.map((draft, index) =>
                    <li key={index}><a href={'/drafts/' + draft.id}>{draft.name}</a></li>)}
            </ul>
        )
    } else {
        return (<None/>)
    }
}

export default SelectDraft