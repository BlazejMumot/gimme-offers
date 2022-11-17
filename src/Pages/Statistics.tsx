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

const Statistics = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await StatisticsService.getStatistics();
    setData(data);
  }
  const dateFormatter = (date: any) => {
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
              <LineChart width={450} height={200} data={data}>
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
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <XAxis
                  dataKey="createdAt"
                  domain={[data[0].createdAt, data[data.length - 1].createdAt]}
                  tickFormatter={dateFormatter}
                />
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
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <XAxis
                  dataKey="createdAt"
                  domain={[data[0].createdAt, data[data.length - 1].createdAt]}
                  tickFormatter={dateFormatter}
                />
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
                Daily Stats
              </Typography>
              {/* <BarChart width={600} height={400} data={data[0]}>
                <Bar dataKey="mostSeniorityOffersCount" fill="green" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
              </BarChart> */}
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
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
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <XAxis
                  dataKey="createdAt"
                  domain={[data[0].createdAt, data[data.length - 1].createdAt]}
                  tickFormatter={dateFormatter}
                />
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
