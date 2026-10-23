'use client';
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(40).fill(1);
  const cols = new Array(30).fill(1);
  
  // Sophisticated, slightly darker professional hover tints for gradient gray background
  let colors = [
    "rgba(51, 148, 156, 0.78)",   // Deep Slate Blue
    "rgba(229, 115, 38, 0.82)",    // Deep Amber / Orange
    "rgba(126, 80, 133, 0.82)",     // Dark Slate Gray
    "rgba(37, 99, 235, 0.56)",    // Rich Blue
    "rgba(2, 141, 247, 0.73)"
  ];
  
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 w-full h-full flex flex-wrap justify-center pointer-events-auto z-0 overflow-hidden",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div key={`row` + i} className="w-full flex justify-center flex-row">
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              className="w-12 h-12 border-r border-b border-slate-300/60 relative transition-colors duration-150"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-6 -top-[14px] -left-[14px] text-slate-400/50 stroke-[1.5]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);