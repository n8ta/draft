import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero";
import None from "./None";

const BannedHeros = (props) => {
    const { heros } = props;
    if (heros && heros.length > 0) {
        return (
            <div>
                <ul>
                    {heros.map((hero) =>
                        <Hero button={true} enabled={false} key={hero} name={hero}/>
                    )}
                </ul>
            </div>
        )
    } else {
        return (
            <None/>
        )
    }
}
BannedHeros.propTypes = {
    heros: PropTypes.arrayOf(PropTypes.string)
}

export default BannedHeros
