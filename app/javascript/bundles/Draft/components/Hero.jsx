import React from "react";

const Hero = (props) => {
    console.info(props)
    return (
        <li key={props.name}>
            {props.name}
        </li>
    )
}

export default Hero