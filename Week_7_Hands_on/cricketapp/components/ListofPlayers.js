import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 95 },
    { name: "Gill", score: 65 },
    { name: "Dhoni", score: 50 },
    { name: "Pant", score: 80 },
    { name: "Kohli", score: 99 },
    { name: "Jadeja", score: 45 },
    { name: "Bumrah", score: 35 },
    { name: "Ashwin", score: 75 },
    { name: "Rahul", score: 60 },
    { name: "Shami", score: 70 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      {players.map((player, idx) => (
        <p key={idx}>{player.name}: {player.score}</p>
      ))}
      <h2>Players with score below 70:</h2>
      {below70.map((player, idx) => (
        <p key={idx}>{player.name}: {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
