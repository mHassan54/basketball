"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Button from "@/components/Button";
import { RiPushpin2Fill } from "react-icons/ri";

export interface Player {
  id: string | number;
  name: string;
  type?: string;
  status?: string;
  team?: string;
  position?: string;
  age?: number;
  country?: string;
  image?: string;
  number?: number;
  height?: number;
  weight?: number;
  salary?: number;
  contract?: string;
}

const players: Player[] = [
  {
    id: 1,
    name: "Hermannsson Martin",
    status: "Live",
    type: "Medium",
    image: "/images/players/1.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 2,
    name: "Koumadje Christ",
    status: "Schedule",
    type: "Medium",
    image: "/images/players/2.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 3,
    name: "Mattisseck Jonas",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/3.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 4,
    name: "Dorian Grosber",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/4.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 5,
    name: "Delow Marte",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/5.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 6,
    name: "Hermannsson Martin",
    status: "Live",
    type: "Medium",
    image: "/images/players/1.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 7,
    name: "Koumadje Christ",
    status: "Schedule",
    type: "Medium",
    image: "/images/players/2.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 8,
    name: "Mattisseck Jonas",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/3.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 9,
    name: "Dorian Grosber",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/4.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 10,
    name: "Delow Marte",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/5.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 11,
    name: "Hermannsson Martin",
    status: "Live",
    type: "Medium",
    image: "/images/players/1.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 12,
    name: "Koumadje Christ",
    status: "Schedule",
    type: "Medium",
    image: "/images/players/2.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 13,
    name: "Mattisseck Jonas",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/3.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 14,
    name: "Dorian Grosber",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/4.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 15,
    name: "Delow Marte",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/5.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 16,
    name: "Hermannsson Martin",
    status: "Live",
    type: "Medium",
    image: "/images/players/1.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 17,
    name: "Koumadje Christ",
    status: "Schedule",
    type: "Medium",
    image: "/images/players/2.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 18,
    name: "Mattisseck Jonas",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/3.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 19,
    name: "Dorian Grosber",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/4.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
  {
    id: 20,
    name: "Delow Marte",
    status: "Upcoming",
    type: "Medium",
    image: "/images/players/5.png",
    team: "Alba Berlin",
    position: "Guard",
    age: 29,
    country: "USA",
  },
];

export default function PlayerList() {
  const [expandedId, setExpandedId] = useState<number | string | null>(1); // First item opened by default

  // eslint-disable-next-line
  const handleToggle = (id: number | string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => {
        const isExpanded = player.id === expandedId;

        return (
          <div
            key={player.id}
            className={cn(
              "relative border border-borderDarkPurple rounded-lg bg-transparent text-white transition-all p-3",
              isExpanded && "bg-tileBackground"
            )}
          >
            {/* <button
              onClick={() => handleToggle(player?.id ?? "")}
              className="absolute text-purple-400 font-bold right-5"
            >
              {isExpanded ? <IoMdRemove size={22} /> : <IoMdAdd size={22} />}
            </button> */}
            <div className="flex items-center gap-3">
              <Image
                src={player?.image ?? ""}
                alt={player.name}
                width={isExpanded ? 85 : 50}
                height={isExpanded ? 85 : 50}
                className="rounded border border-borderDarkPurple"
              />
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <span
                    className={cn(
                      "text-[8px] border border-borderDarkPurple bg-borderPurple/20 px-2 py-0.5 rounded",
                      isExpanded && "text-lg"
                    )}
                  >
                    {player.status}
                  </span>
                  <span
                    className={cn(
                      "text-[8px] border border-borderDarkPurple bg-borderPurple/20 px-2 py-0.5 rounded",
                      isExpanded && "text-lg"
                    )}
                  >
                    {player.type}
                  </span>
                </div>
                <h3
                  className={cn(
                    "text-lg font-bold text-wrap break-words",
                    isExpanded && "text-[28px]"
                  )}
                >
                  {player.name}
                </h3>
              </div>
            </div>

            {isExpanded && (
              <div className="mt-5">
                <div className="flex flex-col gap-3 text-lg">
                  <div className="flex items-center justify-between border-b border-tileBackground">
                    <p className="text-gray-400">Team</p>
                    <p>{player.team}</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-tileBackground">
                    <p className="text-gray-400">Position</p>
                    <p>{player.position}</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-tileBackground">
                    <p className="text-gray-400">Age</p>
                    <p>{player.age}</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-tileBackground">
                    <p className="text-gray-400">Country</p>
                    <p>{player.country}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Actions</p>
                    <div className="flex gap-2 items-center">
                      <Button
                        icon={<IoMdAdd size={18} />}
                        className="!p-2 h-[30px] w-[30px] flex justify-center items-center rounded"
                      />
                      <Button
                        icon={<IoMdRemove size={18} />}
                        className="!p-2 h-[30px] w-[30px] flex justify-center items-center rounded"
                      />
                      <Button
                        icon={<RiPushpin2Fill size={18} />}
                        className="!p-2 h-[30px] w-[30px] flex justify-center items-center rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
