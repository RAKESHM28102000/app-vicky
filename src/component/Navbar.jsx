import React, { useState } from "react";
import  PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { AppBar,Toolbar,styled,Typography,Box,InputBase,Badge,Avatar,Menu,MenuItem  } from '@mui/material';


const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"

})
const Search=styled("div")(({theme})=>({
   backgroundColor:"white",
   color:"text.primary",
   padding:"0 10px",
   borderRadius:theme.shape.borderRadius,
   width:"40%"

}));
const Icons=styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
 }));
 const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none",
      }
   }));
  

function Navbar(){
    const [open,setOpen]=useState(false);
    return (<AppBar position="sticky">
    <StyledToolbar>

    {/* this is a Typography */}
    <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Rakesh <PetsIcon/></Typography>
    <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>

    {/* this is div */}
    <Search><InputBase placeholder="search..." /></Search>

    {/* this is box */}
    <Icons>
    <Badge badgeContent={4} color="error">
     <MailIcon  />
    </Badge>
    <Badge badgeContent={3} color="error">
     <NotificationsActiveIcon/>
    </Badge>
    <Avatar sx={{width:30,height:30}} src="https://picsum.photos/seed/picsum/200/300"
     onClick={(e)=>setOpen(true)}
    />
    </Icons>
  {/* this is box */}
    <UserBox onClick={(e)=>setOpen(true)}>
    <Avatar 
    sx={{width:30,height:30}} 
    src="https://picsum.photos/seed/picsum/200/300"/>

    <Typography variant="span">Rakesh</Typography>
    </UserBox>

    </StyledToolbar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem href="/profile">Profile</MenuItem>
        <MenuItem href="/account">My account</MenuItem>
        <MenuItem href="/logout" >Logout</MenuItem>
      </Menu>

    </AppBar>
    )
}
export default Navbar;