import React from "react";
type Props = {
  start: { x: number; y: number };
  end: { x: number; y: number };
};

const NodeArrow: React.FC<Props> = ({ start, end }) => {
  const control1 = {
    y: start.y,
    x: (end.x - start.x) / 2 + start.x,
  };
  const control2 = {
    y: end.y,
    x: (end.x - start.x) / 2 + start.x,
  };

  return (
    <svg
      width="100vw"
      height="100vh"
      className="pointer-events-none absolute left-0 top-0"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="white" />
        </marker>
      </defs>
      <path
        d={`M ${start.x} ${start.y} 
            C ${control1.x} ${control1.y}, 
              ${control2.x} ${control2.y}, 
              ${end.x} ${end.y}
        `}
        stroke="white"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default NodeArrow;
