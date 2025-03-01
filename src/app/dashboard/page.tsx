import React from 'react'
import Banner from "./_components/Banner";
import { banner } from "./_utils/banners";
import Matches from "./_components/Matches";
import { sampleMatches } from "./_utils/matches";

const Dashboard = () => {
  return (
    <div className="flex px-8 py-5">
      {/* left content */}
      <div className="flex-[3] flex flex-col gap-8">
        <Banner {...banner} />
        <Matches matches={sampleMatches} />
      </div>
      {/* right bar */}
      <div className="flex-1"></div>
    </div>
  );
};

export default Dashboard;