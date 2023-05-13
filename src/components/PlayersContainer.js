import React, { Component } from "react";
import Player from "./Player";
import { Players } from "../shared/PlayersData"

export default class PlayersContainer extends Component {
    render() {
        return (
            <div className="players-container">
                {Players.map((player) =>
                    <Player img={player.img} name={player.name} club={player.club} />
                )}
            </div>
        );
    }
}