import React from "react";
// import { styled } from '@mui/material/styles';
import {Card,Checkbox,CardHeader,CardMedia ,CardContent,CardActions,Collapse,Avatar,IconButton,Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Post(props){
    const options={weekday:"long",year:"numeric",month:"long",day:"numeric"};
    const currentday=new Date().toLocaleDateString("en-US",options);

    return (
     <Card sx={{margin:6,boxShadow:"5px 10px 5px rgba(0,0,0,0.3)"}}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:red[500]}} aria-label="recipe">
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={currentday}
      />
      <CardMedia
        component="img"
        height="240"
        image={props.image}
        alt="pictures"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorderIcon/>} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
      </CardActions>  
    </Card>  
   
)
}
export default Post;