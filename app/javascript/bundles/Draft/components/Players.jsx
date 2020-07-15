import React from "react";
import TeamMember from "./TeamMember";
import PropTypes from "prop-types";
import None from "./None";
import {UserType} from "../types";

export default class Players extends React.Component {
    static propTypes = {
        players: PropTypes.arrayOf(UserType),
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {players} = this.props
        return (
            <div>
                <h4>Unpicked Players</h4>
                {players && players.length > 0 ?
                    (<ul>
                        {players.map((player) => <TeamMember key={player.uuid} name={player.name}/>)}
                    </ul>) :
                    (<None/>)
                }
            </div>
        )
    }
}