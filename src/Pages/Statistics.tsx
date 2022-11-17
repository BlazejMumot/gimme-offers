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
  BarChart,
  Bar,
} from "recharts";
import moment from "moment";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import LayersTwoToneIcon from "@mui/icons-material/LayersTwoTone";
import ComputerTwoToneIcon from "@mui/icons-material/ComputerTwoTone";
import StayCurrentPortraitTwoToneIcon from "@mui/icons-material/StayCurrentPortraitTwoTone";
import { IDailyStatistics } from "../Types/DailyStatistics/IDailyStatistics";
import { IDailyOffersCount } from "../Types/DailyStatistics/IDailyOffersCount";
import CustomTooltip from "../Components/Statistics/CustomTooltip";

const Statistics = () => {
  const [data, setData] = useState<IDailyStatistics[]>([]);
  const [lastday, setlastDay] = useState<any>();
  const [selectedTech, setSelectedTech] = useState<string>();
  const [backendOffersCount, setBackendOffersCount] = useState<
    IDailyOffersCount[]
  >([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await StatisticsService.getStatistics();
    setData(data);
    createLastDayData(data);
    createDailyOffersCount(data);
  }

  function createDailyOffersCount(allData: IDailyStatistics[]) {
    let dailycount = allData.map((element) => {
      return {
        createdAt: element.createdAt,
        count:
          element.leastSeniorityOffersCount +
          element.secondSeniorityOffersCount +
          element.mostSeniorityOffersCount,
      };
    });
    setBackendOffersCount(dailycount);
  }

  function createLastDayData(allData: IDailyStatistics[]) {
    let lastDay = allData[allData.length - 1];
    setSelectedTech(lastDay.type);
    let lastDayToSave = [
      {
        columnName: lastDay.leastSeniorityOffers,
        value: lastDay.leastSeniorityOffersCount,
      },
      {
        columnName: lastDay.secondSeniorityOffers,
        value: lastDay.secondSeniorityOffersCount,
      },
      {
        columnName: lastDay.mostSeniorityOffers,
        value: lastDay.mostSeniorityOffersCount,
      },
    ];
    lastDayToSave.sort((a, b) => a.columnName.localeCompare(b.columnName));
    setlastDay(lastDayToSave);
  }

  const dateFormatter = (date: string) => {
    return moment(date).format("DD/MM/YY");
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <Avatar sx={{ ml: 2.5, mb: -6, mt: 2, backgroundColor: "#AEBAB1" }}>
            <SettingsTwoToneIcon />
          </Avatar>
          <Card sx={{ m: 2, width: 0.9, ml: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Backend Offers
              </Typography>
              <LineChart width={450} height={200} data={backendOffersCount}>
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
                <Tooltip content={<CustomTooltip />} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="createdAt" tickFormatter={dateFormatter} />
                <YAxis />
              </LineChart>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Avatar sx={{ ml: 2.5, mb: -6, mt: 2, backgroundColor: "#AEBAB1" }}>
            <ComputerTwoToneIcon />
          </Avatar>
          <Card sx={{ m: 2, width: 0.9, ml: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Frontend Offers
              </Typography>
              <LineChart width={450} height={200} data={data}>
                <Line
                  type="monotone"
                  dataKey="mostSeniorityOffersCount"
                  stroke="#8884d8"
                />
                <Tooltip content={<CustomTooltip />} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="createdAt" tickFormatter={dateFormatter} />
                <YAxis />
              </LineChart>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Avatar sx={{ ml: 2.5, mb: -6, mt: 2, backgroundColor: "#AEBAB1" }}>
            <LayersTwoToneIcon />
          </Avatar>
          <Card sx={{ m: 2, width: 0.9, ml: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Fullstack Offers
              </Typography>
              <LineChart width={450} height={200} data={data}>
                <Line
                  type="monotone"
                  dataKey="mostSeniorityOffersCount"
                  stroke="#8884d8"
                />
                <Tooltip content={<CustomTooltip />} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="createdAt" tickFormatter={dateFormatter} />
                <YAxis />
              </LineChart>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card
            sx={{
              m: 2,
              ml: 5,
              height: { xl: "55vh" },
              width: 0.95,
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Daily Stats - {selectedTech}
              </Typography>
              <BarChart width={600} height={400} data={lastday}>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#AEBAB1" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="columnName" />
                <YAxis />
              </BarChart>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Avatar sx={{ ml: 2.5, mb: -6, mt: 2, backgroundColor: "#AEBAB1" }}>
            <StayCurrentPortraitTwoToneIcon />
          </Avatar>
          <Card sx={{ m: 2, width: 0.9, ml: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Mobile Offers
              </Typography>
              <LineChart width={450} height={200} data={data}>
                <Line
                  type="monotone"
                  dataKey="mostSeniorityOffersCount"
                  stroke="#8884d8"
                />
                <Tooltip content={<CustomTooltip />} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="createdAt" tickFormatter={dateFormatter} />
                <YAxis />
              </LineChart>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Statistics;
