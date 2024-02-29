import React from "react";
import sessions from "../mocks/userAverageSessions.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineGraph = () => {
  const data = sessions.data.sessions;

  //Conversion numero de jour en jour de semaine
  const initialDay = ["L", "M", "M", "J", "V", "S", "D"];
  const formattedData = data.map((session, index) => ({
    day: initialDay[index],
    sessionLength: session.sessionLength,
  }));

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
  return (
    <div className="block">
      <h3 className="session-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 110,
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
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="var(--white)"
            dot={false}
            activeDot={{
              fill: "#FFFFFF",
            }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
