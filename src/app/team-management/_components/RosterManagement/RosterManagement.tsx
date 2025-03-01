"use client";
import Table from "@/components/Table";
import { rosterColumns, rosterData } from "../../_utils/RosterManagements";
import Accordion from "@/components/Accordion";

const RosterTable = () => {
  return (
    <Accordion
      title="Roster Management"
      containerClass="w-full"
      headerClass="text-white"
      contentClass="border border-searchBorder rounded-lg"
    >
      <Table
        columns={rosterColumns}
        data={rosterData}
        className="border border-searchBorder rounded-lg max-h-[600px]"
        tableClass=""
        headerClass="bg-borderPurple text-white"
        bodyClass="divide-y divide-tileBackground bg-tileBackground bg-opacity-[0.5]"
      />
    </Accordion>
  );
};

export default RosterTable;
