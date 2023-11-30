import {
   Avatar,
   Box,
   Card,
   CardHeader,
   TextField,
   styled,
} from "@mui/material";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import {createPostAPI} from "../apis/createpostAPI";
import { UserInfoType } from "@kshitijraj09/sharedlib_mf";
import { PostsType } from "../typedeclaration/types";

type CreatePostPropsType = {
   userInfo: UserInfoType;
   setAllPost: React.Dispatch<React.SetStateAction<PostsType[]>>;
}

const styles = () => ({
   TypographyStyle: {
      maxWidth: "250px",
      "&:hover": {textDecoration: "underline"},
      cursor: "pointer",
   },
});

const CardStyled = styled(Card)(() => ({
   color: "#95BDFF",
   backgroundColor: "#EEEEEE",
   padding: 10,
   margin: "0 0px 15px",
   borderRadius: 10,
}));

const StyledLoadingButton = styled(LoadingButton)(() => ({
   backgroundColor: "#E5D1FA",
   color: "#7F669D",
   margin: "5px",
   "&: hover": {
      backgroundColor: "#F7C8E0",
   },
}));

export const CreatePost =({
   userInfo,
   setAllPost
}: CreatePostPropsType) => {
   const socket = window.socket;
   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
   const [isInProgress, setIsInProgress] = useState(false);
   const [formValue, setFormValue] = useState({
      postContent: ''
   });

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      let formdata = {
         postContent: formData.get("postContent") as string,
      };
      setIsInProgress(true);
      formdata.postContent.trim();
      const data = await createPostAPI(formdata);
      socket.emit('newpost-from-client', data);
      const newPost = {
         ...data,
         avatar: userInfo.avatar,
         username: userInfo.username,
         name: userInfo.name
      };
      setAllPost((prevposts) => [newPost, ...prevposts]);
      if (data) {
         setFormValue({ postContent: '' })
         setIsSubmitDisabled(true);
      }
      setIsInProgress(false);
   };

   const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setFormValue({ postContent: value });
      if (value) {
         setIsSubmitDisabled(false);
         return;
      }
      setIsSubmitDisabled(true)
   }

   return (
      <Box component='form' noValidate={false} onSubmit={handleSubmit}>
         <CardStyled>
            <CardHeader
               avatar={
                  <Avatar
                     alt={userInfo.name}
                     src={`${userInfo.avatar} || 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light`}
                  />
               }
               subheader={
                  <TextField
                     name='postContent'
                     id='create-post-input'
                     placeholder={`Hey ${userInfo.name}, share your thought here...`}
                     multiline
                     fullWidth
                     variant='standard'
                     maxRows={4}
                     sx={{ marginTop: "10px" }}
                     value={formValue.postContent}
                     onChange={onChangeHandler}
                     onBlur={({ target: { value } }) =>
                        setFormValue({ postContent: value.trim() })}
                  />
               }
            />
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "right",
               }}>
               <StyledLoadingButton
                  loading={isInProgress}
                  loadingPosition='end'
                  endIcon={<SendIcon />}
                  variant='contained'
                  size='large'
                  type='submit'
                  disabled={isSubmitDisabled}>
                  Post
               </StyledLoadingButton>
            </Box>
         </CardStyled>
      </Box>
   );
};
