"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { IoIosSearch } from "react-icons/io";
// import { MultiSelect } from "@/components/Select";
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
  "All",
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
  "All",
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
  "All",
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

const PlayerDatabaseContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<Option[]>([]);
  const [selectedLeagues, setSelectedLeagues] = useState<Option[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<Option[]>([]);

  const handleCountriesChange = (newValues: Option[]) => {
    setSelectedCountries(newValues);
  };
  const handleLeaguesChange = (newValues: Option[]) => {
    setSelectedLeagues(newValues);
  };
  const handleTeamsChange = (newValues: Option[]) => {
    setSelectedTeams(newValues);
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
            {/* country filter */}
            <div className="space-y-[10px] flex-1">
              <h2>Country</h2>
              <MultiSelect
                placeholder="Select Country..."
                value={selectedCountries}
                options={countries.map((country) => ({
                  label: String(country ?? ""),
                  value: String(country ?? ""),
                }))}
                className="min-w-full"
                onValueChange={handleCountriesChange}
                isMulti
              />
            </div>
            {/* League filter */}
            <div className="space-y-[10px] flex-1">
              <h2>League</h2>
              <MultiSelect
                placeholder="Select League..."
                value={selectedLeagues}
                options={leagues.map((league) => ({
                  label: String(league ?? ""),
                  value: String(league ?? ""),
                }))}
                className="min-w-full"
                onValueChange={handleLeaguesChange}
                isMulti
              />
            </div>
            {/* Teams filter */}
            <div className="space-y-[10px] flex-1">
              <h2>Teams</h2>
              <MultiSelect
                placeholder="Select Team..."
                value={selectedTeams}
                options={teams.map((team) => ({
                  label: String(team ?? ""),
                  value: String(team ?? ""),
                }))}
                className="min-w-full"
                onValueChange={handleTeamsChange}
                isMulti
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionContainer>
    </div>
  );
};

export default PlayerDatabaseContent;
