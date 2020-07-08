import React from "react";
import { Card } from "./Card";

export const CardList = ({ state }) => {
    console.log(state);
    return (
        <div className="grid-container">
            {state.map((card, i) => (
                <Card key={i} card={card} />
            ))}
        </div>
    );
};
