import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ search, searchForPlant }) {
const [plants, setPlants] = useState([])

function addNewPlant(newPlant) {
  fetch("http://localhost:6001/plants", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPlant)
})
.then(response => response.json())
.then(data => {setPlants([...plants, data])
});
}

const filteredPlants = plants.filter((plant) => {
  return plant.name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchForPlant={searchForPlant} />
      <PlantList plants={filteredPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
