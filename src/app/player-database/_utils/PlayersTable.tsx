import { TableColumn } from "@/types/Table";

import Button from "@/components/Button";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Player } from "../_types/Player";

export const playerColumns: TableColumn<Player & { action?: string }>[] = [
  { label: "Name", key: "name" },
  { label: "Position", key: "position" },
  { label: "Age", key: "age" },
  { label: "Country", key: "country" },
  { label: "Team", key: "team" },
  {
    label: "Action",
    key: "action",
    cellRenderer: () => {
      return (
        <div className="flex gap-2">
          <Button
            className="!p-1 rounded bg-borderPurple/30"
            icon={<FaPlus className="text-white text-xs" size={10} />}
          />
          <Button
            className="!p-1 rounded bg-borderPurple/30"
            icon={<FaEdit className="text-white text-xs" size={10} />}
          />
          <Button
            className="!p-1 rounded bg-borderPurple/30"
            icon={<FaTrash className="text-white text-xs" size={10} />}
          />
        </div>
      );
    },
  },
];

export const players: Player[] = [
  {
    name: "A. Dorries",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "A. Nufer",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "Bean Justin",
    position: "Forward",
    age: 27,
    country: "USA",
    team: "Alba Berlin",
  },
  {
    name: "D. Grosber",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "Delow Marte",
    position: "Guard",
    age: 22,
    country: "Germany",
    team: "Alba Berlin",
  },
  {
    name: "Hermannsson",
    position: "Guard",
    age: 29,
    country: "Iceland",
    team: "Alba Berlin",
  },
  {
    name: "Koumadje Christ",
    position: "Center",
    age: 27,
    country: "USA",
    team: "Alba Berlin",
  },
  {
    name: "Mattisseck Jonas",
    position: "Guard",
    age: 24,
    country: "Germany",
    team: "Alba Berlin",
  },
  {
    name: "A. Dorries",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "A. Nufer",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "Bean Justin",
    position: "Forward",
    age: 27,
    country: "USA",
    team: "Alba Berlin",
  },
  {
    name: "D. Grosber",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "Delow Marte",
    position: "Guard",
    age: 22,
    country: "Germany",
    team: "Alba Berlin",
  },
  {
    name: "Hermannsson",
    position: "Guard",
    age: 29,
    country: "Iceland",
    team: "Alba Berlin",
  },
  {
    name: "Koumadje Christ",
    position: "Center",
    age: 27,
    country: "USA",
    team: "Alba Berlin",
  },
  {
    name: "Mattisseck Jonas",
    position: "Guard",
    age: 24,
    country: "Germany",
    team: "Alba Berlin",
  },
  {
    name: "A. Dorries",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "A. Nufer",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "Bean Justin",
    position: "Forward",
    age: 27,
    country: "USA",
    team: "Alba Berlin",
  },
  {
    name: "D. Grosber",
    position: "N/A",
    age: NaN,
    country: "N/A",
    team: "Alba Berlin",
  },
  {
    name: "Delow Marte",
    position: "Guard",
    age: 22,
    country: "Germany",
    team: "Alba Berlin",
  },
  {
    name: "Hermannsson",
    position: "Guard",
    age: 29,
    country: "Iceland",
    team: "Alba Berlin",
  },
  {
    name: "Koumadje Christ",
    position: "Center",
    age: 27,
    country: "USA",
    team: "Alba Berlin",
  },
  {
    name: "Mattisseck Jonas",
    position: "Guard",
    age: 24,
    country: "Germany",
    team: "Alba Berlin",
  },
];
