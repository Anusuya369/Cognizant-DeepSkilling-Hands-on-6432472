import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Gill', 'Dhoni', 'Pant'];
  const RanjiTrophy = ['Pujara', 'Rahane', 'Iyer', 'Sundar'];

  const mergedPlayers = [...T20players, ...RanjiTrophy];

  const oddTeam = mergedPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = mergedPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Odd Team Players</h2>
      {oddTeam.map((player, idx) => <p key={idx}>{player}</p>)}

      <h2>Even Team Players</h2>
      {evenTeam.map((player, idx) => <p key={idx}>{player}</p>)}
    </div>
  );
};

export default IndianPlayers;
