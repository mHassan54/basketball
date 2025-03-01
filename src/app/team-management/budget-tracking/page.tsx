import Button from "@/components/Button";
import { redirect } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import BudgetTiles from "./_components/BudgetTiles";
import CategoryBreakDown from "./_components/CategoryBreakDown";
import RecentTransaction from "./_components/RecentTransaction";

const BudgetTracking = () => {
  const handleBackClick = async () => {
    "use server";
    redirect("/team-management"); // Redirects to "/new-page"
  };

  return (
    <div className="flex flex-col px-8 py-5 gap-[30px]">
      {/* Header */}
      <div className="flex justify-between items-center border-purpleFill">
        <h2 className="text-white text-xl font-bold uppercase">
          Budget Tracking
        </h2>
        <Button
          title="Back"
          className="!px-[10px] !py-[5px] rounded"
          onClick={handleBackClick}
          icon={<IoMdArrowRoundBack />}
        />
      </div>

      <BudgetTiles />

      <div className="flex gap-[10px]">
        {/* left side tables container */}
        <div className="flex-[3] flex flex-col gap-[30px]">
          <CategoryBreakDown />
          <RecentTransaction />
        </div>

        {/* right side container */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default BudgetTracking;
