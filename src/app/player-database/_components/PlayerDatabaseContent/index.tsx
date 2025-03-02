"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { IoIosSearch } from "react-icons/io";
import { Option } from "@/types/Select";
import dynamic from "next/dynamic";
import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

const MultiSelect = dynamic(() => import("@/components/Select/MultiSelect"), {
  ssr: false,
});

const countries = [
  "United States",
  "China",
  "Canada",
  "United Kingdom",
  "India",
  "Australia",
  "Argentina",
  "Brazil",
  "Mexico",
];

const leagues = [
  "League 1",
  "League 2",
  "League 3",
  "League 4",
  "League 5",
  "League 6",
  "League 7",
  "League 8",
  "League 9",
];

const teams = [
  "Team 1",
  "Team 2",
  "Team 3",
  "Team 4",
  "Team 5",
  "Team 6",
  "Team 7",
  "Team 8",
  "Team 9",
];

export const positionFilters: Option[] = [
  { label: "PG", value: "Point Guard" },
  { label: "SG", value: "Shooting Guard" },
  { label: "SF", value: "Small Forward" },
  { label: "PF", value: "Power Forward" },
  { label: "C", value: "Center" },
];

type Filters = {
  countries: Option[];
  leagues: Option[];
  teams: Option[];
  positions: Option[];
  height: { to?: string; from?: string };
  // 🔔 Add more filters here easily as needed
};

const initialFilters: Filters = {
  countries: [],
  leagues: [],
  teams: [],
  positions: [],
  height: {},
};

const PlayerDatabaseContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleFilterChange = (
    filterName: keyof Filters,
    newValues: Option[]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: newValues,
    }));
  };

  const handleHeightChange = (key: "to" | "from", value: string) => {
    setFilters((prev) => ({
      ...prev,
      height: {
        ...prev.height,
        [key]: value,
      },
    }));
  };

  return (
    <div>
      <Input
        icon={<IoIosSearch size={20} />}
        iconPosition="left"
        placeholder="Search Player......."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="border-white/50 w-full border-white"
      />

      <AccordionContainer
        type="single"
        collapsible
        className="w-full border-0"
        defaultValue="filter"
      >
        <AccordionItem value="filter" className="border-0">
          <AccordionTrigger className="flex flex-row-reverse justify-end gap-4 hover:no-underline text-xl">
            Filter
          </AccordionTrigger>
          <AccordionContent className="flex gap-[30px]">
            {/* Country filter */}
            <div className="space-y-[10px] flex-1">
              <h2>Country</h2>
              <MultiSelect
                placeholder="Select Country..."
                value={filters.countries}
                options={countries.map((country) => ({
                  label: country,
                  value: country,
                }))}
                className="min-w-full"
                onValueChange={(values) =>
                  handleFilterChange("countries", values)
                }
                isMulti
              />
            </div>
            {/* League filter */}
            <div className="space-y-[10px] flex-1">
              <h2>League</h2>
              <MultiSelect
                placeholder="Select League..."
                value={filters.leagues}
                options={leagues.map((league) => ({
                  label: league,
                  value: league,
                }))}
                className="min-w-full"
                onValueChange={(values) =>
                  handleFilterChange("leagues", values)
                }
                isMulti
              />
            </div>
            {/* Teams filter */}
            <div className="space-y-[10px] flex-1">
              <h2>Teams</h2>
              <MultiSelect
                placeholder="Select Team..."
                value={filters.teams}
                options={teams.map((team) => ({
                  label: team,
                  value: team,
                }))}
                className="min-w-full"
                onValueChange={(values) => handleFilterChange("teams", values)}
                isMulti
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionContainer>

      <AccordionContainer
        type="single"
        collapsible
        className="w-full border-0"
        defaultValue="biometrics"
      >
        <AccordionItem value="biometrics" className="border-0">
          <AccordionTrigger className="flex flex-row-reverse justify-end gap-4 hover:no-underline text-xl">
            Biometrics
          </AccordionTrigger>
          <AccordionContent className="flex gap-5">
            <div className="flex-1">
              {/* position filter */}
              <div className="space-y-[10px] flex-1">
                <h2>Position</h2>
                <MultiSelect
                  placeholder="Select Position..."
                  value={filters.positions}
                  options={positionFilters}
                  className="min-w-full"
                  onValueChange={(values) =>
                    handleFilterChange("positions", values)
                  }
                  isMulti
                />
              </div>
            </div>
            <div className="flex-1">
              {/* height filter */}
              <div className="space-y-[10px] flex-1">
                <h2>Height (inch)</h2>
                <div className="flex items-center gap-5">
                  <Input
                    placeholder=""
                    value={filters?.height?.from ?? ""}
                    type="number"
                    onChange={(e) => handleHeightChange("from", e.target.value)}
                    className="border-white/50 w-full border-white"
                  />
                  <span className="text-md">to</span>
                  <Input
                    placeholder=""
                    type="number"
                    value={filters?.height?.to ?? ""}
                    onChange={(e) => handleHeightChange("to", e.target.value)}
                    className="border-white/50 w-full border-white"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionContainer>
    </div>
  );
};

export default PlayerDatabaseContent;
