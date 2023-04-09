//page2
import React, { useState, useEffect } from "react";

function ModeChoice() {
  const [data, setData] = useState([]);
  const [distanceBand, setDistanceBand] = useState("");
  const [modeOfTransportation, setModeOfTransportation] = useState("");
  const [modeOfTransportation4, setModeOfTransportation4] = useState("");
  const [modeOfTransportation5, setModeOfTransportation5] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://example.com/sample_db_0km.json"
    );
    const jsonData = await response.json();
    setData(jsonData);
  };

  const handleDistanceBandChange = (e) => {
    setDistanceBand(e.target.value);
  };

  const handleModeOfTransportationChange = (e) => {
    setModeOfTransportation(e.target.value);
  };

  const handleModeOfTransportation4Change = (e) => {
    setModeOfTransportation4(e.target.value);
  };

  const handleModeOfTransportation5Change = (e) => {
    setModeOfTransportation5(e.target.value);
  };

  return (
    <div>
      <h1>Mode Choice</h1>
      <table>
        <thead>
          <tr>
            <th>Mode</th>
            <th>Total Travel Time (mins)</th>
            <th>Mode of Transportation</th>
            <th>Cost (Rs)</th>
            <th>Crowding</th>
            <th>Service Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bus Type 1</td>
            <td>{data?.mode_1?.ivtt}</td>
            <td></td>
            <td>{data?.mode_1?.Tcost}</td>
            <td>{data?.mode_1?.Crowd}</td>
            <td>{data?.mode_1?.Serv}</td>
          </tr>
          <tr>
            <td>Bus Type 2</td>
            <td>{data?.mode_2?.ivtt}</td>
            <td></td>
            <td>{data?.mode_2?.Tcost}</td>
            <td>{data?.mode_2?.Crowd}</td>
            <td>{data?.mode_2?.Serv}</td>
          </tr>
          <tr>
            <td>
              {distanceBand === "< 5 km"
                ? "Walk / Bicycle"
                : modeOfTransportation === "Car"
                ? "Car"
                : modeOfTransportation === "Motorbike"
                ? "Motorbike"
                : modeOfTransportation === "Auto"
                ? "Auto"
                : modeOfTransportation === "Taxi"
                ? "Taxi"
                : modeOfTransportation === "Bicycle"
                ? "Bicycle"
                : modeOfTransportation4 === "Car"
                ? "Car + Bicycle"
                : modeOfTransportation4 === "Motorbike"
                ? "Motorbike + Bicycle"
                : modeOfTransportation4 === "Auto"
                ? "Auto + Bicycle"
                : modeOfTransportation4 === "Taxi"
                ? "Taxi + Bicycle"
                : modeOfTransportation5 === "Car"
                ? "Car + Walk"
                : modeOfTransportation5 === "Motorbike"
                ? "Motorbike + Walk"
                : modeOfTransportation5 === "Auto"
                ? "Auto + Walk"
                : modeOfTransportation5 === "Taxi"
                ? "Taxi + Walk"
                : "Walk"
              }
            </td>
            <td>{data?.mode_walk_bicycle?.ivtt}</td>
            <td></td>
            <td>0</td>
            <td>{data?.mode_walk_bicycle?.Crowd}</td>
            <td>{data?.mode_walk_bicycle?.Serv}</td>
          </tr>
     </thread>
</div>

