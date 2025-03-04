"use client";
import React, { useState } from "react";
import WatchListFilters from "../WatchlistFilters";
import { Filters } from "../../_types/Filter";
import { Option } from "@/types/Select";
import PlayerList from "../PlayerList";

const initialFilters: Filters = {
  priorities: [],
  ageRange: [14, 40],
  searchText: "",
  // �� Add more filters here easily as needed
};
const WatchlistContent = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleFilterChange = (
    filterName: keyof Filters,
    newValues: Option[] | string | [number, number]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: newValues,
    }));
  };

  return (
    <div>
      <WatchListFilters
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
      <PlayerList />
    </div>
  );
};

export default WatchlistContent;
