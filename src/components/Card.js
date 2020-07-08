import React from "react";

export const Card = ({ card }) => {
    const images = require.context("./../assets/", true);
    let img = images("./" + card.image + ".png");
    return (
        <div className="card bg-white p-3">
            <h2 className="beer-heading">{card.name}</h2>
            <p className="lead mb-0">
                {card.style} {card.percent}%
            </p>
            {card.volume === "Pack" ? (
                <p className="lead">{card.vessel}</p>
            ) : (
                <p className="lead">
                    {card.volume} {card.vessel}
                </p>
            )}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="beer-price mb-0">${card.price.toFixed(2)} </h2>
                <p className="view-more mb-0">VIEW DETAILS</p>
                {/* <button className="btn btn-outline-success">Add to cart</button> */}
            </div>
            <div className="mx-3 img-container">
                <img className="beer-image" src={img} alt="" />
            </div>
        </div>
    );
};
