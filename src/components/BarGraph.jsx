import React from "react";
import ovalBlack from "../image/ovalBlack.png";
import ovalRed from "../image/ovalRed.png";
import activity from "../mocks/userActivity.json";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarGraph = () => {
  const data = activity.data.sessions;

   // Fonction pour extraire le jour de la date
   const extractDay = (dateString) => {
    return dateString.substring(8, 10);
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
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={(item) => extractDay(item.day)} />
          <YAxis type="number" domain={["auto", "auto"]} orientation="right" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="kilogram"
            fill="var(--bar1)"
            activeBar={<Rectangle fill="var(--bar1)" stroke="var(--bar1)" />}
            barSize={7}
          />
          <Bar
            dataKey="calories"
            fill="var(--bar2)"
            activeBar={<Rectangle fill="var(--bar2)" stroke="var(--bar2)" />}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
