import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { IlinksTech } from "../Pages/Types/IlinksTech";
import ComputerTwoToneIcon from "@mui/icons-material/ComputerTwoTone";
import StayCurrentPortraitTwoToneIcon from "@mui/icons-material/StayCurrentPortraitTwoTone";
import LayersTwoToneIcon from "@mui/icons-material/LayersTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";

const drawerWidth = 220;
const linksTech: IlinksTech[] = [
  { name: "Backend Offers", link: "backend", icon: <SettingsTwoToneIcon /> },
  {
    name: "Frontend Offers",
    link: "frontend",
    icon: <ComputerTwoToneIcon />,
  },
  {
    name: "Fullstack Offers",
    link: "fullstack",
    icon: <LayersTwoToneIcon />,
  },
  {
    name: "Mobile Offers",
    link: "mobile",
    icon: <StayCurrentPortraitTwoToneIcon />,
  },
];

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#354f52",
        }}
      >
        <Toolbar>
          <WorkTwoToneIcon sx={{ mr: 1 }} />
          <Typography variant="h6" noWrap component="div">
            Gimme Offer IT
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            backgroundColor: "white",
            height: "100%",
          }}
        >
          <List>
            <ListItem key={"Home"} disablePadding>
              <ListItemButton component={Link} to={"/"}>
                <ListItemIcon>
                  <HomeTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            {linksTech.map((element, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={"/" + element.link}>
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText primary={element.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem key={"Stats"} disablePadding>
              <ListItemButton component={Link} to={"/statistics"}>
                <ListItemIcon>
                  <BarChartTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={"Stats"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
