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
import RadarGraphModel from "../models/RadarGraphModel";

const RadarGraph = ({data}) => {
  const radarGraphModel = new RadarGraphModel(performance); 
  const formattedData = radarGraphModel.formatRadarGraphData();


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
