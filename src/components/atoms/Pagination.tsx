"use client";
import React, { useState, useEffect } from "react";

export interface PaginationProps {
  actualPage: number;
  totalPage: number;
  setNumberPage: (number: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ actualPage, totalPage, setNumberPage }) => {
  const [selectedElement, setSelectedElement] = useState<number>(actualPage);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const page: number[] = [];
    if (totalPage <= 5) {
      for (let n = 1; n <= totalPage; n++) {
        page.push(n);
      }
      setPages(page);
    } else {
      const downlimit = selectedElement - 5 < 1 ? 1 : selectedElement - 5;
      const uplimit = selectedElement + 5 < totalPage ? selectedElement + 5 : totalPage;
      for (let n = downlimit; n <= uplimit; n++) {
        page.push(n);
      }
      setPages(page);
    }
  }, [selectedElement, totalPage]);

  useEffect(() => {
    setSelectedElement(actualPage);
  }, [actualPage]);

  function next(number: number): void {
    setNumberPage(number);
    setSelectedElement(number);
  }

  function prev(number: number): void {
    setNumberPage(number);
    setSelectedElement(number);
  }

  return (
    <div className="mt-5 flex items-center justify-end">
      <div className="mr-5">
        <span
          className="hover:text-gray-800 cursor-pointer text-base text-black"
          onClick={() => prev(selectedElement <= 0 ? 0 : selectedElement - 1)}
        >
          Previous
        </span>
      </div>

      <div className="mr-5 flex w-fit items-end gap-2 ">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`${
              page === selectedElement ? "bg-green text-white" : ""
            }  cursor-pointer rounded px-2  text-sm font-semibold text-black hover:bg-green hover:text-white`}
            onClick={() => {
              setSelectedElement(page);
              setNumberPage(page);
            }}
          >
            {page}
          </button>
        ))}
      </div>

      <div>
        <span
          className="hover:text-gray-800 cursor-pointer text-base text-black"
          onClick={() =>
            next(selectedElement >= pages.length - 1 ? totalPage - 1 : selectedElement + 1)
          }
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default Pagination;
