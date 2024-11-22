import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';  // Import the function from services/sw-api

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getAllStarships();  // Call the API function
      setStarships(data);  // Update the state with the fetched data
    };

    fetchStarships();  // Trigger the API call
  }, []);  // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="App">
      <h1>Starships</h1>
      <div className="starship-cards">
        {starships.map((starship, index) => (
          <div key={index} className="starship-card">
            <h2>{starship.name}</h2>  {/* Display the name of each starship */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
