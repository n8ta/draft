import React from "react";

const SelectDraft = (props) => {
    return (
        <div>
            <a href={'/drafts/' + props.id}>{props.name}</a>
        </div>
    )
}

export default SelectDraft