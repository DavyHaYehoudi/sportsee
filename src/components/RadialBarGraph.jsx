import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
// import data from "../mocks/userMainData.json";
import RadialBarGraphModel from "../models/RadialBarGraphModel";

const RadialBarGraph = ({data}) => {
  const radialBarGraphModel = new RadialBarGraphModel(data);
  const formattedData = radialBarGraphModel.formatRadialBarGraphData();

  return (
    <div className="block">
      <h3 className="score-title">Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          outerRadius="0%"
          data={formattedData}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={170}
            fill="var(--white)"
          />
          <RadialBar
            dataKey="value"
            barSize={10}
            cornerRadius={100}
            fill="var(--redRadialBar)"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-details-wrapper">
        <span className="score-details-number">
          {formattedData[0].value * 100}%
        </span>
        <span className="score-details-text">de votre</span>
        <span className="score-details-text">objectif</span>
      </div>
    </div>
  );
};
RadialBarGraph.propTypes = {
  // Ajoutez les PropTypes nécessaires en fonction de votre logique
};

export default RadialBarGraph;
