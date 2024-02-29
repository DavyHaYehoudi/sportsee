import React from "react";
import performance from "../mocks/userPerformance.json";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const RadarGraph = () => {
  const kindTraduct = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const formattedData = performance.data.data.map((perfKind) => ({
    ...perfKind,
    kind: kindTraduct[perfKind.kind],
  }));

  return (
    <div className="block">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={formattedData}
          startAngle={30}
          endAngle={-330}
          margin={{
            right: 15,
            left: 20,
          }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={{ fill: "var(--white)", fontSize: 12 }}
          />
          <PolarRadiusAxis axisLine={false} tick={false} tickLine={false} />
          <Radar
            dataKey="value"
            stroke="none"
            fill="var(--redRadar)"
            fillOpacity={0.7}
            animationEasing={"ease-out"}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarGraph;
