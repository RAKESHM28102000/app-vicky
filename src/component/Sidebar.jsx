import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box,Switch,List,ListItem,ListItemButton,ListItemIcon,ListItemText, Button } from '@mui/material';
import Navbar from "./Navbar";
import App from "./App";
function Home(){
  return (<div>
         <Navbar/>
         <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
          <h1 style={{backgroundColor:"red"}}>Home page</h1>
          <Button type="button" href={<App/>}>Home</Button>
         </Box>
  </div>)
}
function Sidebar(props){
    return (
    <Box
    //  backgroundColor="white" 
     flex={2} 
     p={2}
     sx={{display :{xs:"none" ,sm:"block" }}}>
     <Box   position="fixed" sx={{boxShadow:"5px 10px 5px rgba(0,0,0,0.3)"}}>
        <List>
        {/* this ListItem-1 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href={<Home/>}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          {/* this ListItem-2 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
         {/* this ListItem-3*/} 
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
        {/* this ListItem-4 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Health&Safety">
              <ListItemIcon>
                <HealthAndSafetyIcon/>
              </ListItemIcon>
              <ListItemText primary="Health&Safety" />
            </ListItemButton>
          </ListItem>
      {/* this ListItem-5 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#SupervisorAccount">
              <ListItemIcon>
                <SupervisorAccountIcon/>
              </ListItemIcon>
              <ListItemText primary="SupervisorAccount" />
            </ListItemButton>
          </ListItem>
     {/* this ListItem-6 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Settings">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

           {/* this ListItem-7*/}
           <ListItem disablePadding>
            <ListItemButton component="a" href="#AccountCircle">
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="AccountCircle" /> 
            </ListItemButton>
          </ListItem>

         {/* this ListItem-8*/}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#darkmode">
              <ListItemIcon>
                <DarkModeIcon/>
              </ListItemIcon>
              <Switch onChange={(e)=>{props.setmode(props.mode==="light" ?"dark":"light")}} />
              <ListItemText />
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
</Box>)
}
export default Sidebar;