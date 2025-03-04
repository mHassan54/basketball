import React from "react";
import PlayerDetails from "./_components/PlayerDetails";
import PlayerProfile from "./_components/PlayerProfile";

const PlayerDatabase = () => {
  return (
    <div className="flex flex-col gap-5 m-5 p-5 bg-white/5 rounded-lg">
      {/* show top player content component here */}
      <PlayerProfile
        player={{
          id: 1,
          name: "Hermannsson Martin",
          position: "Point Guard",
          age: 29,
          country: "Iceland",
          image: "/images/players/1.png",
          number: 23,
        }}
      />

      {/* Tables here */}
      <PlayerDetails />
    </div>
  );
};

export default PlayerDatabase;
