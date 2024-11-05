// src/components/PolygonMap.js
import React, { useState } from 'react';
import SpiderGraph from './SpiderGraph';
import './PolygonMap.css';

const PolygonMap = () => {
  const [playerData, setPlayerData] = useState(null);

  // Sample player data to visualize when the component first renders
  const players = [
    { id: 1, name: 'GamerX', xp: 68, health: 100, score: 85, level: 12, shield: 50 },
    { id: 2, name: 'ShadowNinja', xp: 45, health: 40, score: 90, level: 10, shield: 30 },
    { id: 3, name: 'DragonSlayer', xp: 70, health: 70, score: 80, level: 15, shield: 40 },
    { id: 4, name: 'CyberKnight', xp: 60, health: 50, score: 95, level: 20, shield: 60 },
    { id: 5, name: 'PixelWarrior', xp: 50, health: 10, score: 75, level: 8, shield: 20 },
    { id: 6, name: 'RogueAssassin', xp: 80, health: 90, score: 100, level: 10, shield: 70 },
    { id: 7, name: 'MysticMage', xp: 30, health: 30, score: 60, level: 5, shield: 10 },
    { id: 8, name: 'BlazeHunter', xp: 90, health: 80, score: 100, level: 20, shield: 80 },
    { id: 9, name: 'StealthSniper', xp: 40, health: 20, score: 70, level: 7, shield: 30 },
    { id: 10, name: 'TitanCrusher', xp: 85, health: 95, score: 90, level: 18, shield: 90 },
  ];

  const handleRowClick = (player) => {
    setPlayerData(player);
  };

  return (
    <div className="polygon-container">
      <div className="player-table">
        <h2 style={{ color: '#39ff14' }}>Stats Visualizer</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>XP</th>
              <th>Health</th>
              <th>Score</th>
              <th>Level</th>
              <th>Shield</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} onMouseEnter={() => handleRowClick(player)} style={{ cursor: 'pointer' }}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.xp}</td>
                <td>{player.health}</td>
                <td>{player.score}</td>
                <td>{player.level}</td>
                <td>{player.shield}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="spider-graph">
        <div className="player-name">
          {playerData ? <h3>{playerData.name}</h3> : <h3></h3>}
        </div>
        {playerData && (
          <table className="player-stats">
            <thead>
              <tr>
                <th>XP</th>
                <th>Health</th>
                <th>Score</th>
                <th>Level</th>
                <th>Shield</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{playerData.xp}</td>
                <td>{playerData.health}</td>
                <td>{playerData.score}</td>
                <td>{playerData.level}</td>
                <td>{playerData.shield}</td>
              </tr>
            </tbody>
          </table>
        )}
        <SpiderGraph playerData={playerData} />
      </div>
    </div>
  );
};

export default PolygonMap;
