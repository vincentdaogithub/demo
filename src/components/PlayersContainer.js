import React from "react";
import Player from "./Player";

export default function PlayersContainer() {
    return (
        <div className="players-container">
            {this.props.players.map((player) =>
                <Player img={player.img} name={player.name} club={player.club} />
            )}
        </div>
    );
}