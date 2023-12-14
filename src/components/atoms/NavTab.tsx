"use client";

import React, { ReactNode, useState } from "react";

export type Tap = {
  label: string;
  component: ReactNode;
  onClick?: () => void;
};

type NavTabsProps = {
  tabs: Tap[];
  activeTab?: number;
};

const NavTabs = ({ tabs, activeTab }: NavTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(activeTab || 0);

  const handleTabClick = (index: number, onClick?: () => void) => {
    setActiveIndex(index);
    if (onClick) onClick();
  };

  return (
    <nav className="mt-10 flex w-full flex-col">
      <div className=" my-5 flex items-center gap-4 overflow-x-auto border-b-2 border-grayLight sm:overflow-hidden ">
        {tabs.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index, item.onClick)}
            className={`flex h-12 min-w-fit items-center bg-transparent text-base font-semibold  ${
              index === activeIndex
                ? "border-b-4 border-green text-green "
                : "text-black"
            } cursor-pointer px-4  font-semibold `}
            type="button"
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      {tabs[activeIndex] && <section>{tabs[activeIndex].component}</section>}
      <p className="pt-10 "> </p>
    </nav>
  );
};

export default NavTabs;
