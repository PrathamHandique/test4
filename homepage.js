import { useState } from 'react';

function HomePage() {
  const [transportation, setTransportation] = useState('');
  const [distance, setDistance] = useState('');

  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  return (
    <div>
      <h1>Respondent Travel Profile</h1>
      <form>
        <label>
          What is your most frequently used means of travel from your home to work location?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="transportation"
            value="Bus"
            onChange={handleTransportationChange}
          />
          Bus
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="transportation"
            value="Metro"
            onChange={handleTransportationChange}
          />
          Metro
        </label>
        <br />
        {/* Add remaining radio buttons here */}
        <br />
        <label>
          What is the total distance between your home and workplace?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="distance"
            value="< 5 km"
            onChange={handleDistanceChange}
          />
          {'< 5 km'}
        </label>
        <br />
        {/* Add remaining radio buttons here */}
      </form>
    </div>
  );
}

export default HomePage;
