import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [search, setSearch] = useState("")

  function searchForPlant(search){
    setSearch(search)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage searchForPlant={searchForPlant} search={search} />
    </div>
  );
}

export default App;
