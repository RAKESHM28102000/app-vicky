import React from "react";
import Post from "./Post"
import { Box } from '@mui/material';
const Posts=[{
    image:"https://picsum.photos/id/237/536/354",
    title:"rakesh web developer",
    avatar:"R",
    content :"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
    },
    {image:"https://picsum.photos/seed/picsum/536/354",
    title:"Robin the freelancer",
    avatar:"N",
    content:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
  
    },
   {image:"https://picsum.photos/id/1084/536/354?grayscale",
    title:"john cena",
    avatar:"S",
    content:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
  
  },{
    image:"https://picsum.photos/536/354",
    title:"jack sparrow",
    avatar:"J",
    content:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
  
  },
  {
    image:"https://picsum.photos/id/237/536/354",
    title:"vicky",
    avatar:"V",
    content:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackh."
  }

]

function Feed(){
    return (
    <Box flex={3} p={2}  >
     {Posts.map(function(post){
        return (<Post image={post.image} title={post.title} 
               avatar={post.avatar} content={post.content}
        />) })
     }
    </Box>
    )
}
export default Feed;

 {/* <Post image="https://picsum.photos/id/237/536/354"/>
           <Post image="https://picsum.photos/seed/picsum/536/354"/>
           <Post image="https://picsum.photos/id/1084/536/354?grayscale"/>
           <Post image="https://picsum.photos/536/354"/>
           <Post image="https://picsum.photos/536/354"/>
           <Post image="https://picsum.photos/id/237/536/354"/> */}
