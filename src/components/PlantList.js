import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(data => {
        const updatedPlants = data.map(plant => ({ ...plant, inStock: true }));
        setPlants(updatedPlants);
      });
  }, []);

  function markOutOfStock(plantId) {
    const updatedPlants = plants.map(plant => {
      if (plant.id === plantId) {
        return { ...plant, inStock: false };
      }
      return plant;
    });
    setPlants(updatedPlants);
  }

  function markInStock(plantId) {
    const updatedPlants = plants.map(plant => {
      if (plant.id === plantId) {
        return { ...plant, inStock: true };
      }
      return plant;
    });
    setPlants(updatedPlants);
  }

  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          markOutOfStock={markOutOfStock}
          markInStock={markInStock}
        />
      ))}
    </ul>
  );
}

export default PlantList;

