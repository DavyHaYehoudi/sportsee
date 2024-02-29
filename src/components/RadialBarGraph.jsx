import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import data from "../mocks/userMainData.json";

const RadialBarGraph = () => {
  const { todayScore, score } = data.data;
  const dataScore = todayScore ? todayScore : score;
  const formattedData = [{ name: "score", value: dataScore }];
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
        <span className="score-details-number">{dataScore * 100}%</span>
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
