import React from "react";
import RosterTable from "./_components/RosterManagement";
import RosterProgress from "./_components/RosterProgress";
import { redirect } from "next/navigation";
import Watchlist from "./_components/WatchList";
import { filters, players } from "./_utils/Watchlist";

const progressData = {
  total: 125000,
  remaining: 15000,
};

const TeamManagement = () => {
  const handleClick = async () => {
    "use server";
    redirect("/team-management/budget-tracking"); // Redirects to "/new-page"
  };

  return (
    <div className="flex flex-col px-8 py-5 gap-[30px]">
      <RosterTable />
      <RosterProgress
        title="Team Roster"
        progress={
          ((progressData?.total - progressData?.remaining) /
            progressData?.total) *
          100
        } // Dynamic progress
        totalLabel="Total Salary"
        totalValue={progressData?.total} // Now a number
        remainingLabel="Remaining Salary"
        remainingValue={progressData?.remaining} // Now a number
        currency="$" // Pass any currency
        handleClick={handleClick} // Pass any function to handle click event
      />
      <Watchlist title="Watchlist" filters={filters} players={players} />
    </div>
  );
};

export default TeamManagement;
