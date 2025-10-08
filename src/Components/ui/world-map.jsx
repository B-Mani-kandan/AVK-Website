"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";
import { FaPlane } from "react-icons/fa";
import { useMemo } from "react";

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme } = useTheme();

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white",
      }),
    [theme]
  );

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const path = createCurvedPath(startPoint, endPoint);

          return (
            <g key={`path-group-${i}`}>
              <motion.path
                id={`plane-path-${i}`}
                d={path}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
              />
              <g>
                <foreignObject width="20" height="20">
                  <div style={{ color: lineColor }}>
                    <FaPlane size={16} />
                  </div>
                </foreignObject>
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${i * 0.5}s`}
                >
                  <mpath xlinkHref={`#plane-path-${i}`} />
                </animateMotion>
              </g>
            </g>
          );
        })}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="10%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="90%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
