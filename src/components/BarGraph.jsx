import React from "react";
import ovalBlack from "../image/ovalBlack.png";
import ovalRed from "../image/ovalRed.png";
// import activity from "../mocks/userActivity.json";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ActivityModel from "../models/ActivityModel";
import PropTypes from "prop-types";


const BarGraph = ({data}) => {
  const activityModel = new ActivityModel(data?.data);
  const formattedData = activityModel.formatBarGraphData();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-barGraph">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="block">
      <div className="legendary">
        <h3>Activité quotidienne</h3>
        <ul>
          <li>
            <img src={ovalBlack} alt="oval" /> Poids (kg){" "}
          </li>
          <li>
            <img src={ovalRed} alt="oval" /> Calories brûlées (kCal)
          </li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="60%">
        <BarChart
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey={(item) => activityModel.extractDay(item.day)}
            tick={{
              stroke: "#9B9EAC",
              fontSize: 14,
              fontWeight: 400,
            }}
          />
          <YAxis
            dataKey={(item)=>item.kilogram}
            domain={['dataMin-2', 'dataMax+1']}
            orientation="right"
            tick={{ fill: '#9B9EAC' }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            animationEasing="ease-out"
            content={<CustomTooltip />}
            offset={40}
          />
          <Bar
            dataKey="kilogram"
            fill="var(--bar1)"
            activeBar={<Rectangle fill="var(--bar1)" stroke="var(--bar1)" />}
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="var(--bar2)"
            activeBar={<Rectangle
              //  fill="var(--bar2)" 
              //  stroke="var(--bar2)"
                />}
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
BarGraph.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number
      })
    ),
    userId: PropTypes.number,
  }),
};
export default BarGraph;
