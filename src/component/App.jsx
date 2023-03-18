import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Navbar from "./Navbar";
import {Box,Stack } from '@mui/material';
import Add from "./Add";
import { ThemeProvider} from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';



function App(){
    const [mode,setmode]=useState("light")
    const darkmode= createTheme({
        palette:{
            mode:mode,
        },
    })
    
    return(<ThemeProvider theme={darkmode}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
           <Navbar/>
           <Stack direction="row" spacing={2} justifyContent="space-between">
           <Sidebar setmode={setmode} mode={mode}/>
           <Feed/>
           <Rightbar/>
           </Stack>
           <Add/>
           </Box> 
           </ThemeProvider>          
           )
          
            
}
export default App;





{/* attributes of button are size="small/large",variant="text/outlined/contained",startIcon={},disabled,href
         <Button size="small" startIcon={<AnchorIcon/>} variant="contained">Contained</Button>
         <Button size="small" color="error" startIcon={<AddIcon/>} variant="contained">Contained</Button>
<Button sx={{backgroundColor:"skyblue",color:"yellow",margin:5,"&:hover":{ backgroundColor:"red"}}} variant="contained">own styled </Button>     
          <Zoom in={true}><Fab><AddIcon/></Fab></Zoom>
 */}
