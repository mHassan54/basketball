"use client";
import React, { useState } from "react";
import Pagination from "@/components/Pagination";
import { playerColumns, players } from "../../_utils/PlayersTable";
import Table from "@/components/Table";

const PlayersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(players?.length / itemsPerPage);

  const paginatedPlayers = players?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="mt-8 space-y-5">
      <Table
        columns={playerColumns}
        data={paginatedPlayers}
        className="border-none rounded-lg"
        tableClass=""
        headerClass="bg-borderPurple text-white"
        bodyClass="divide-y divide-transparent"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default PlayersTable;
