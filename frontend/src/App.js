import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ActivityForm from "./components/ActivityForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [activities, setActivities] = useState([]);
  const [results, setResults] = useState(null);

  // Dummy footprint calculation
  const calculateFootprint = (activity) => {
    let carbon = 0;
    let water = 0;

    if (activity.type === "Food") {
      if (activity.value === "Beef") { carbon = 3; water = 2500; }
      if (activity.value === "Chicken") { carbon = 1; water = 500; }
      if (activity.value === "Vegetables") { carbon = 0.3; water = 100; }
    }

    if (activity.type === "Travel") {
      if (activity.value === "Car") { carbon = 0.2 * activity.distance; }
      if (activity.value === "Bus") { carbon = 0.1 * activity.distance; }
      if (activity.value === "Cycle") { carbon = 0; }
    }

    if (activity.type === "Energy") {
      carbon = 0.5 * activity.kwh;
    }

    return { carbon, water };
  };

  const handleAddActivity = (activity) => {
    const result = calculateFootprint(activity);
    setActivities([...activities, { ...activity, ...result }]);
    setResults((prev) => ({
      carbon: (prev?.carbon || 0) + result.carbon,
      water: (prev?.water || 0) + result.water,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title">🌱 EcoTrack</h1>
        <ActivityForm onAdd={handleAddActivity} />
        <Dashboard results={results} activities={activities} />
      </div>
    </div>
  );
}

export default App;
