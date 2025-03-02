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
import Slider from "@/components/Slider";
import { HiChevronDoubleDown } from "react-icons/hi2";
import Button from "@/components/Button";
import PlayersTable from "../PlayersTable";

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
  weight: string;
  ageRange: [number, number];
  noOfGamesPlayed: string;
  rebG: string;
  astG: string;
  ptsG: string;
  fgPercentage: string;
  minutesG: { to?: string; from?: string };
  stlG: string;
  blkG: string;
  threePtPercentage: string;
  ftPercentage: string;
  // 🔔 Add more filters here easily as needed
};

const initialFilters: Filters = {
  countries: [],
  leagues: [],
  teams: [],
  positions: [],
  height: {},
  ageRange: [14, 40],
  weight: "",
  noOfGamesPlayed: "",
  rebG: "",
  astG: "",
  ptsG: "",
  fgPercentage: "",
  minutesG: {},
  stlG: "",
  blkG: "",
  threePtPercentage: "",
  ftPercentage: "",
  // �� Add more filters here easily as needed
};

const PlayerDatabaseContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleFilterChange = (
    filterName: keyof Filters,
    newValues: Option[] | string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: newValues,
    }));
  };

  const handleAgeRangeChange = (newValues: [number, number]) => {
    setFilters((prev) => ({
      ...prev,
      ageRange: newValues,
    }));
  };

  const handleRangeChange = (
    primaryKey: keyof Filters,
    key: "to" | "from",
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [primaryKey]: {
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

      {/* Filters */}
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

      {/* Biometrics */}
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
            <div className="flex-1 space-y-5">
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

              {/* age range */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2>Age (range)</h2>
                  <div className="flex space-x-2">
                    <Input
                      type="number"
                      min={14}
                      max={filters?.ageRange[1]}
                      value={filters?.ageRange[0]?.toString()}
                      onChange={(e) =>
                        handleAgeRangeChange([
                          parseInt(e.target.value),
                          filters?.ageRange[1],
                        ])
                      }
                      className="w-16 !p-0 !px-2 border-white"
                    />
                    <Input
                      type="number"
                      min={filters?.ageRange[0]}
                      max={40}
                      value={filters?.ageRange[1]?.toString()}
                      onChange={(e) =>
                        handleAgeRangeChange([
                          filters?.ageRange[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-16 !p-0 !px-2 border-white"
                    />
                  </div>
                </div>
                <Slider
                  min={14}
                  max={40}
                  step={1}
                  value={filters?.ageRange}
                  onValueChange={handleAgeRangeChange}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-5">
              {/* height filter */}
              <div className="space-y-[10px] flex-1">
                <h2>Height (inch)</h2>
                <div className="flex items-center gap-5">
                  <Input
                    placeholder="from"
                    value={filters?.height?.from ?? ""}
                    type="number"
                    onChange={(e) =>
                      handleRangeChange("height", "from", e.target.value)
                    }
                    className="border-white/50 w-full border-white"
                  />
                  <span className="text-md">to</span>
                  <Input
                    placeholder="to"
                    type="number"
                    value={filters?.height?.to ?? ""}
                    onChange={(e) =>
                      handleRangeChange("height", "to", e.target.value)
                    }
                    className="border-white/50 w-full border-white"
                  />
                </div>
              </div>

              {/* weight filter  */}
              <div className="space-y-[10px] flex-1">
                <h2>Weight (lbs)</h2>
                <Input
                  placeholder="Weight"
                  value={filters?.weight ?? ""}
                  type="number"
                  onChange={(e) => handleFilterChange("weight", e.target.value)}
                  className="border-white/50 w-full border-white"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionContainer>

      {/* Stats Filters */}
      <AccordionContainer
        type="single"
        collapsible
        className="w-full border-0"
        defaultValue="statsFilters"
      >
        <AccordionItem
          value="statsFilters"
          className="border-0 !overflow-hidden"
        >
          <AccordionTrigger className="flex flex-row-reverse justify-end gap-4 hover:no-underline text-xl">
            Stats Filters
          </AccordionTrigger>
          <AccordionContent className="flex gap-5 !overflow-hidden">
            {/* left */}
            <div className="flex-1 space-y-5">
              {/* # of Games Played  */}
              <div className="space-y-[10px] flex-1">
                <h2># of Games Played</h2>
                <Input
                  placeholder="# of Games Played"
                  value={filters?.noOfGamesPlayed ?? ""}
                  type="number"
                  onChange={(e) =>
                    handleFilterChange("noOfGamesPlayed", e.target.value)
                  }
                  className="border-white/50 w-full border-white"
                />
              </div>

              {/* REB/G and AST/G */}
              <div className="flex space-x-5 flex-1">
                {/* REB/G  */}
                <div className="space-y-[10px] flex-1">
                  <h2>REB/G</h2>
                  <Input
                    placeholder=""
                    value={filters?.rebG ?? ""}
                    onChange={(e) => handleFilterChange("rebG", e.target.value)}
                    className="border-white/50 w-full border-white"
                  />
                </div>

                {/* AST/G  */}
                <div className="space-y-[10px] flex-1">
                  <h2>AST/G</h2>
                  <Input
                    placeholder=""
                    value={filters?.astG ?? ""}
                    onChange={(e) => handleFilterChange("astG", e.target.value)}
                    className="border-white/50 w-full border-white"
                  />
                </div>
              </div>

              {/* PTS/G and FG% */}
              <div className="flex space-x-5 flex-1">
                {/* REB/G  */}
                <div className="space-y-[10px] flex-1">
                  <h2>PTS/G</h2>
                  <Input
                    placeholder=""
                    value={filters?.ptsG ?? ""}
                    onChange={(e) => handleFilterChange("ptsG", e.target.value)}
                    className="border-white/50 w-full border-white"
                  />
                </div>

                {/* FG%  */}
                <div className="space-y-[10px] flex-1">
                  <h2>FG%</h2>
                  <Input
                    placeholder=""
                    value={filters?.fgPercentage ?? ""}
                    onChange={(e) =>
                      handleFilterChange("fgPercentage", e.target.value)
                    }
                    className="border-white/50 w-full border-white"
                  />
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex-1 space-y-5">
              {/* Minutes/G */}
              <div className="space-y-[10px] flex-1">
                <h2>Minutes/G</h2>
                <div className="flex items-center gap-5">
                  <Input
                    placeholder="from"
                    value={filters?.minutesG?.from ?? ""}
                    type="number"
                    onChange={(e) =>
                      handleRangeChange("minutesG", "from", e.target.value)
                    }
                    className="border-white/50 w-full border-white"
                  />
                  <span className="text-md">to</span>
                  <Input
                    placeholder="to"
                    type="number"
                    value={filters?.minutesG?.to ?? ""}
                    onChange={(e) =>
                      handleRangeChange("minutesG", "to", e.target.value)
                    }
                    className="border-white/50 w-full border-white"
                  />
                </div>
              </div>

              {/* STL/G and BLK/G */}
              <div className="flex space-x-5 flex-1">
                {/* STL/G  */}
                <div className="space-y-[10px] flex-1">
                  <h2>STL/G</h2>
                  <Input
                    placeholder=""
                    value={filters?.stlG ?? ""}
                    onChange={(e) => handleFilterChange("stlG", e.target.value)}
                    className="border-white/50 w-full border-white"
                  />
                </div>

                {/* BLK/G  */}
                <div className="space-y-[10px] flex-1">
                  <h2>BLK/G</h2>
                  <Input
                    placeholder=""
                    value={filters?.blkG ?? ""}
                    onChange={(e) => handleFilterChange("blkG", e.target.value)}
                    className="border-white/50 w-full border-white"
                  />
                </div>
              </div>

              {/* 3PT% and FT% */}
              <div className="flex space-x-5 flex-1">
                {/* 3PT%  */}
                <div className="space-y-[10px] flex-1">
                  <h2>3PT%</h2>
                  <Input
                    placeholder=""
                    value={filters?.threePtPercentage ?? ""}
                    onChange={(e) =>
                      handleFilterChange("threePtPercentage", e.target.value)
                    }
                    className="border-white/50 w-full border-white"
                  />
                </div>

                {/* FT%  */}
                <div className="space-y-[10px] flex-1">
                  <h2>FT%</h2>
                  <Input
                    placeholder=""
                    value={filters?.ftPercentage ?? ""}
                    onChange={(e) =>
                      handleFilterChange("ftPercentage", e.target.value)
                    }
                    className="border-white/50 w-full border-white"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionContainer>

      {/* filter actions */}
      <div className="space-y-3">
        <h2 className="py-4 flex items-center gap-2 text-xl">
          <HiChevronDoubleDown size={20} />
          Adjustable Filters
        </h2>
        <div className="flex gap-5">
          <Button
            label="Reset"
            className="!px-9 rounded w-[180px] border-white flex !justify-center !items-center"
          />
          <Button
            label="Apply"
            className="!px-9 rounded w-[180px] border-searchBorder flex !justify-center !items-center bg-headerBg/30"
          />
        </div>
      </div>

      <PlayersTable />
    </div>
  );
};

export default PlayerDatabaseContent;
