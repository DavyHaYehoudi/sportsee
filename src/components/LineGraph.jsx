import React from "react";
// import sessions from "../mocks/userAverageSessions.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle
} from "recharts";
import LineGraphModel from "../models/LineGraphModel";
import PropTypes from "prop-types";

const LineGraph = ({ data }) => {
  const lineGraphModel = new LineGraphModel(data?.data?.sessions);
  const formattedData = lineGraphModel.formatLineGraphData();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
          <div className="customTooltip-lineGraph">
            <p>{`${payload[0].value} min`}</p>
          </div>
      );
    }
    return null;
  };
  const CustomCursor = ({ points, width }) => {
    console.log('points:', points)
    const { x } = points[0]
    return (
      <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x}  width={width} height={300} />
    )
  }

  
  return (
    <div className="block">
      <h3 className="session-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 50,
            right: 0,
            left: 0,
            bottom: 30,
          }}
        >
          <XAxis
            dataKey="day"
            dy={20}
            axisLine={{ stroke: "transparent" }}
            tickLine={false}
            tick={{ fill: "var(--white)", opacity: "0.5", fontSize: "14px" }}
            interval={"preserveStartEnd"}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis type="number" hide="true" />
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            content={<CustomTooltip />}
            animationEasing="ease-out"
            cursor={<CustomCursor /> }
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="var(--white)"
            dot={false}
            activeDot={{
              fill: "#FFFFFF",
              r: 4,
              strokeWidth: 8,
              strokeOpacity: 0.4,
            }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
LineGraph.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.number,
          sessionLength: PropTypes.number,
        })
      ),
    }),
  }),
};

export default LineGraph;
