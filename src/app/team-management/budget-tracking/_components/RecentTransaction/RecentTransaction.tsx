"use client";
import Table from "@/components/Table";
import React from "react";
import {
  recentTransactionColumns,
  recentTransactionData,
} from "../../_utils/Transaction";

const RecentTransaction = () => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-white/5 rounded-[10px]">
      <div className="flex justify-between items-center border-purpleFill">
        <h2 className="text-white text-xl font-bold">
          Recent Transaction
        </h2>
      </div>
      <Table
        columns={recentTransactionColumns}
        data={recentTransactionData}
        className="border-none rounded-lg max-h-[500px]"
        tableClass=""
        headerClass="bg-borderPurple text-white"
        bodyClass="divide-y divide-tileBackground bg-tileBackground bg-opacity-[0.5]"
      />
    </div>
  );
};

export default RecentTransaction;
