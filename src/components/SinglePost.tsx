import React, { useEffect, useState } from "react";
import {
   Alert,
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   Checkbox,
   IconButton,
   Typography,
} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import type {PostsType} from '../typedeclaration/types'
import {dateFormatter} from "../util";
import {deletePostAPI} from "../apis/deletePostAPI";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import { likePostAPI } from "../apis/likePostAPI";

type SinglePostPropsType = {
   currentUserId: string;
   setAllPost: React.Dispatch<React.SetStateAction<PostsType[]>>;
} & PostsType

const StyledCard = styled(Card)(({theme}) => ({
   borderRadius: "10px",
   backgroundColor: "#F6F6F6",
   margin: "10px 1px",
}));

const styles = () => ({
   cardHeader: {
      backgroundColor: "#F38181",
      color: "#F9F7F7",
   },
   cardContent: {
      padding: "10px 20px",
      minHeight: "100px",
      backgroundColor: "#FAE3D9",
      color: "#1B262C",
   },
   CardActions: {
      padding: "0px",
      backgroundColor: "#FAE3D9",
   },
});

export const SinglePost = ({
   likes,
   username,
   postContent,
   updatedAt,
   createdAt,
   userId,
   postId,
   setAllPost,
   currentUserId
}: SinglePostPropsType) => {
   const socket = window.socket;
   const [likePost, setLikePost] = useState(false);
   const classes = styles();
   const [likesCount, setLikesCount] = useState<number>();
   const deletePost = async () => {
      const data = await deletePostAPI(postId);
      socket.emit('deletepost-from-client', { postId, userId });
      if (data) {
         setAllPost((prevPost)=>prevPost.filter(post=>post.postId !== postId))
      }
   };

   useEffect(() => {
      setLikePost(likes.some(userid => userid === currentUserId));
      setLikesCount(likes.length);
   }, []);

   const setLikeHandler = async() => {
         try {
            await likePostAPI(postId);
            likePost ? setLikesCount(count => count - 1) : setLikesCount(count => count + 1);
            setLikePost((prevState) => !prevState);
            <Alert severity="success">
               Liked the post
            </Alert>
         }
         catch (error) {
            <Alert severity="error">
               Something went wrong
            </Alert>
         }
   }

   return (
      <StyledCard>
         <CardHeader
            avatar={
               <Link to={`/people/${userId}`}>
                  <Avatar aria-label='user-avatar'>{username.charAt(0)}</Avatar>
               </Link>
            }
            action={
               userId === currentUserId &&
               (<IconButton aria-label='delete-post' onClick={deletePost}>
                  <DeleteOutlineOutlinedIcon color='action' />
               </IconButton>)
            }
            title={<Link to={`/people/${userId}`}>{username}</Link>}
            subheader={
               <Typography>{dateFormatter(createdAt, true)}</Typography>
            }
            sx={classes.cardHeader}
         />
         <CardContent sx={classes.cardContent}>
            <Typography variant='body1'>{postContent}</Typography>
         </CardContent>
         <CardActions disableSpacing sx={classes.CardActions}>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite style={{color:'red'}} />}
               checked={likePost} onClick={setLikeHandler}
            />
            {!!likesCount &&
               <Typography color='brown'>{likesCount} {likesCount > 1 ? 'likes' : 'like'}</Typography>
            }
         </CardActions>
      </StyledCard>
   );
};
