import React, { useEffect, useState } from "react";
import {showAllPostsAPI} from "../apis/showAllPostsAPI";
import type {PostsType} from "../typedeclaration/types";
import { SinglePost } from "./SinglePost";
import { UserInfoType } from "@kshitijraj09/sharedlib_mf";

type showPostsPropsType = {
   updatePostsSection: Number;
   setUpdatePostsSection: React.Dispatch<React.SetStateAction<Number>>;
   userInfo: UserInfoType;
};

export const ShowPosts = ({
   updatePostsSection,
   setUpdatePostsSection,
   userInfo
}: showPostsPropsType) => {
   const [allPost, setAllPost] = useState<PostsType[]>([]);

   useEffect(() => {
      showPosts();
   }, [updatePostsSection]);

   const showPosts = async () => {
      const data = await showAllPostsAPI();
      setAllPost(data);
   };
   
   const currentUserId = userInfo._id;
   console.log('here', userInfo);
   

   return (
      <>
         {allPost &&
            allPost.map((post) => (
               <SinglePost
                  postContent={post.postContent}
                  key={post.postId}
                  postId={post.postId}
                  username={post.username}
                  createdAt={post.createdAt}
                  updatedAt={post.updatedAt}
                  userId={post.userId}
                  likes={post.likes}
                  setUpdatePostsSection={setUpdatePostsSection}
                  currentUserId={currentUserId}
               />
            ))
         }
      </>
   );
};
