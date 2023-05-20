import React from "react";

export default function Player({img, name, club}) {
    return (
            <div className="player-card">
                <img src={"assets/players/" + img} alt={name} />
                <h3>{name}</h3>
                <p className="club-name">{club}</p>
                <p className="player-detail"><a href="#home">Details</a></p>
            </div>
    );
}