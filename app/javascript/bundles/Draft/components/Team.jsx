import React from "react";
import TeamMember from "./TeamMember";
import PropTypes from "prop-types";
import None from './None'
import {UserType} from "../types";
import Hero from "./Hero";

export default class Team extends React.Component {
    static propTypes = {
        players: PropTypes.arrayOf(UserType),
        heros: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const children = this.props.players.map((user, index) =>
            <TeamMember index={index} key={user.uuid}{...user}/>
        )
        const heros = this.props.heros.map((hero, index) =>
            <Hero index={index} key={hero} name={hero}/>
        )

        return (
            <div>
                <h5>Players</h5>

                {this.props.players.length > 0 ? <ul>{children}</ul> : (
                    <None/>)
                }
                <h5>Heros</h5>

                {this.props.heros.length > 0 ? <ul>{heros}</ul> : (
                    <None/>)
                }
            </div>
        )
    }
}