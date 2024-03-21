'use client'
import React, { useState, useMemo, useRef } from "react";
import * as d3 from "d3";


type DataItem = {
  make: string;
  count: number;
};
type PieChartProps = {
  width: number;
  height: number;
  cars: [{
    make: string;
    model: string;
    year: number;
    id: string;
    color: string;
  }]
};

const MARGIN_X = 150;
const MARGIN_Y = 50;
const INFLEXION_PADDING = 20;

// const colors = [
//   "#e0ac2b",
//   "#e85252",
//   "#6689c6",
//   "#9a6fb0",
//   "#a53253",
//   "#69b3a2",
// ];

export const PieChartMake = ({ width, height, cars }: PieChartProps) => {

  const listByMake = cars.map((x) => {
    return x.make
  })
  const sortedListByMake = listByMake.sort();

  const WIPData = sortedListByMake.map((x) => {
    let makeData = {
      make: x,
      count: 1
    }
    return makeData
  });

  const WIPData1 = WIPData.map((x, y, arr) => {
    if (y == 0) {
      return x
    } else if (x.make == arr[y - 1].make) {
      x.count = x.count + arr[y - 1].count;
      arr[y - 1].count = 0;
      return x
    } else {
      return x
    }
  })

  const data = WIPData1.filter((x) => {
    if (x.count > 0)
      return x
  })



  const colors = data.map(() => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  })
  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie<any, DataItem>().value((d) => d.count);
    return pieGenerator(data);
  }, [data]);

  const arcGenerator = d3.arc();

  const shapes = pie.map((grp, i) => {
    // First arc is for the pie
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    // Second arc is for the legend inflexion point
    const inflexionInfo = {
      innerRadius: radius + INFLEXION_PADDING,
      outerRadius: radius + INFLEXION_PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? "start" : "end";
    const label = grp.data.make + " (" + grp.value + ")";

    return (
      <g key={i}>
        <path d={slicePath} fill={colors[i]} />
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <text
          x={labelPosX + (isRightLabel ? 2 : -2)}
          y={inflexionPoint[1]}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize={14}
        >
          {label}
        </text>
      </g>
    );
  });

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>{shapes}</g>
    </svg>
  );
};


// const radius = Math.min(width, height) / 2 - MARGIN;

// const pie = useMemo(() => {
//   const pieGenerator = d3.pie<any, DataItem>().value((d) => d.count);
//   return pieGenerator(data);
// }, [data]);

// const arcs = useMemo(() => {
//   const arcPathGenerator = d3.arc();
//   return pie.map((p) =>
//     arcPathGenerator({
//       innerRadius: 0,
//       outerRadius: radius,
//       startAngle: p.startAngle,
//       endAngle: p.endAngle,
//     })
//   );
// }, [radius, pie]);

// return (
//   <svg width={width} height={height} style={{ display: "inline-block" }}>
//     <g transform={`translate(${width / 2}, ${height / 2})`}>
//       {arcs.map((arc, i) => {
//         return <path key={i} d={arc} fill={colors[i]} />;
//       })}
//     </g>
//   </svg>
// );
