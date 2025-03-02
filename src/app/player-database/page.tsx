import React from 'react'
import PlayerDatabaseContent from "./_components/PlayerDatabaseContent";

const PlayerDatabase = () => {
  return (
    <div className="flex flex-col gap-5 m-5 p-5 bg-white/5 rounded-lg">
      <h2 className="text-white text-xl font-bold uppercase">
        Player Database
      </h2>
      <PlayerDatabaseContent />
    </div>
  );
};

export default PlayerDatabase;