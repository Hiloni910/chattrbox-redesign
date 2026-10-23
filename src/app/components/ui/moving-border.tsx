// "use client";
// import React from "react";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionTemplate,
//   useMotionValue,
//   useTransform,
// } from "motion/react";
// import { useRef } from "react";
// import { cn } from "../../lib/utils";

// export function Button({
//   borderRadius = "1.75rem",
//   children,
//   as: Component = "div",
//   containerClassName,
//   borderClassName,
//   duration,
//   className,
//   ...otherProps
// }: {
//   borderRadius?: string;
//   children: React.ReactNode;
//   as?: any;
//   containerClassName?: string;
//   borderClassName?: string;
//   duration?: number;
//   className?: string;
//   [key: string]: any;
// }) {
//   return (
//     <Component
//       className={cn(
//         "relative w-full h-auto overflow-hidden bg-transparent p-[4px]", // Increased padding thickness for bolder border presence
//         containerClassName,
//       )}
//       style={{
//         borderRadius: borderRadius,
//       }}
//       {...otherProps}
//     >
//       <div
//         className="absolute inset-0"
//         style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
//       >
//         <MovingBorder duration={duration || 5000} rx="20%" ry="20%">
//           <div
//             className={cn(
//               // Increased size (h-48 w-48) and enhanced weight/opacity of the glowing orange trail
//               "h-48 w-98 bg-[radial-gradient(#ea580c_25%,#f97316_50%,#fb923c_75%,transparent_90%)] opacity-[1]",
//               borderClassName,
//             )}
//           />
//         </MovingBorder>
//       </div>

//       <div
//         className={cn(
//           // Exact original banner background styling matching your dark design
//           "relative flex h-full w-full items-center justify-center bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white antialiased shadow-2xl overflow-hidden",
//           className,
//         )}
//         style={{
//           borderRadius: `calc(${borderRadius} * 0.96)`,
//         }}
//       >
//         {/* Background Ambient Glows inside the banner */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        
//         <div className="relative z-10 w-full">
//           {children}
//         </div>
//       </div>
//     </Component>
//   );
// }

// export const MovingBorder = ({
//   children,
//   duration = 3000,
//   rx,
//   ry,
//   ...otherProps
// }: {
//   children: React.ReactNode;
//   duration?: number;
//   rx?: string;
//   ry?: string;
//   [key: string]: any;
// }) => {
//   const pathRef = useRef<any>();
//   const progress = useMotionValue<number>(0);

//   useAnimationFrame((time) => {
//     const length = pathRef.current?.getTotalLength();
//     if (length) {
//       const pxPerMillisecond = length / duration;
//       progress.set((time * pxPerMillisecond) % length);
//     }
//   });

//   const x = useTransform(
//     progress,
//     (val) => pathRef.current?.getPointAtLength(val).x,
//   );
//   const y = useTransform(
//     progress,
//     (val) => pathRef.current?.getPointAtLength(val).y,
//   );

//   const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

//   return (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//         className="absolute h-full w-full"
//         width="100%"
//         height="100%"
//         {...otherProps}
//       >
//         <rect
//           fill="none"
//           width="100%"
//           height="100%"
//           rx={rx}
//           ry={ry}
//           ref={pathRef}
//         />
//       </svg>
//       <motion.div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           display: "inline-block",
//           transform,
//         }}
//       >
//         {children}
//       </motion.div>
//     </>
//   );
// };

"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative w-full h-auto overflow-hidden bg-transparent p-[4px]", // Increased padding thickness for bolder border presence
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration || 5000} rx="20%" ry="20%">
          <div
            className={cn(
              // Increased size (h-48 w-48) and enhanced weight/opacity of the glowing orange trail
              "h-48 w-98 bg-[radial-gradient(#ea580c_25%,#f97316_50%,#fb923c_75%,transparent_90%)] opacity-[1]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          // Exact original banner background styling matching your dark design
          "relative flex h-full w-full items-center justify-center bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white antialiased shadow-2xl overflow-hidden",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {/* Background Ambient Glows inside the banner */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  // Fixed: Added explicit fallback values to prevent TS2554 errors on undefined refs
  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
