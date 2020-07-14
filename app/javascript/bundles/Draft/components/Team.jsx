import React from "react";
import TeamMember from "./TeamMember";

export default class Team extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const children = this.props.players.map((user) =>
            <TeamMember {...user}/>
        )
        const heros = this.props.heros.map((hero) =>
            <Hero key={hero} name={hero} />
        )
        console.info(children)
        return (
            <div>
                <p>Players</p>
                <ul>
                    {children}
                </ul>
                <p>Heros</p>
                <ul>
                    {heros}
                </ul>
            </div>
        )
    }
}