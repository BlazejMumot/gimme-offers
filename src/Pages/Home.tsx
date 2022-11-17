import React from "react";
import { useEffect, useState } from "react";
import StatisticsService from "../api/StatisticsService";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import moment from "moment";

const Home = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await StatisticsService.getStatistics();
    setData(data);
  }
  const dateFormatter = (date: any) => {
    return moment(date).format("DD/MM/YY HH:mm");
  };

  return (
    <div>
      <LineChart width={600} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="mostSeniorityOffersCount"
          stroke="#8884d8"
        />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="createdAt"
          domain={[data[0].createdAt, data[data.length - 1].createdAt]}
          tickFormatter={dateFormatter}
        />
        <YAxis />
      </LineChart>
    </div>
  );
};
export default Home;
