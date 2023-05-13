import React, { Component } from "react";
import Player from "./Player";

export default class PlayersContainer extends Component {
    render() {
        return (
            <div className="players-container">
                <Player img="cr.jpg" name="Cristiano Ronaldo" club="Manchester United" />
                <Player img="kante.jpg" name="Kante" club="Chelsea" />
                <Player img="messi.jpg" name="Messi" club="PSG" />
                <Player img="neymar.jpg" name="Neymar" club="PSG" />
                <Player img="kane.jpg" name="Kane" club="Tottenham" />
                <Player img="haaland.jpg" name="Haaland" club="Manchester City" />
            </div>
        );
    }
}