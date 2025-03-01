import Table from "@/components/Table";
import React from "react";
import {
  categoryBreakDownColumns,
  categoryBreakDownData,
} from "../../_utils/Category";

const CategoryBreakDown = () => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-white/5 rounded-[10px]">
      <div className="flex justify-between items-center border-purpleFill">
        <h2 className="text-white text-xl font-bold">
          Category Breakdown
        </h2>
      </div>
      <Table
        columns={categoryBreakDownColumns}
        data={categoryBreakDownData}
        className="border-none rounded-lg max-h-[500px]"
        tableClass=""
        headerClass="bg-borderPurple text-white"
        bodyClass="divide-y divide-tileBackground bg-tileBackground bg-opacity-[0.5]"
      />
    </div>
  );
};

export default CategoryBreakDown;
