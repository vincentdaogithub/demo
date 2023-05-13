import React, { Component } from "react";

export default class Player extends Component {
    render() {
        return (
             <div className="player-card">
                <img src={"assets/players/" + this.props.img} alt={this.props.name} />
                <h3>{this.props.name}</h3>
                <p className="club-name">{this.props.club}</p>
                <p className="player-detail"><a href="#home">Details</a></p>
             </div>
        );
    }
}