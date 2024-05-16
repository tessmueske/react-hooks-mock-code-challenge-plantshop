import React, { useState, useEffect } from "react";

function PlantCard({ plant, markOutOfStock, markInStock }) {
  const [isInStock, setIsInStock] = useState(true);
  const [buttonText, setButtonText] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setIsInStock(plant.inStock);
    setButtonText(plant.inStock ? "In Stock" : "Out of Stock");
  }, [plant]);

  const handleClick = () => {
    if (isInStock) {
      markOutOfStock(plant.id);
      setIsInStock(false);
      setButtonText("Out of Stock");
      setButtonClicked(true);
    } else {
      markInStock(plant.id);
      setIsInStock(true);
      setButtonText("In Stock");
      setButtonClicked(false);
    }
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button
        className={`primary ${buttonClicked ? "out-of-stock" : ""}`}
        onClick={handleClick}
        style={{ backgroundColor: buttonClicked ? "grey" : "" }}
      >
        {buttonText}
      </button>
    </li>
  );
}

export default PlantCard;