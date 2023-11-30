import React from "react";
import type {PostsType} from "../typedeclaration/types";
import { SinglePost } from "./SinglePost";
import { UserInfoType } from "@kshitijraj09/sharedlib_mf";

type showPostsPropsType = {
   userInfo: UserInfoType;
   allPost: PostsType[];
   setAllPost: React.Dispatch<React.SetStateAction<PostsType[]>>;
};

export const ShowPosts = ({
   userInfo,
   allPost,
   setAllPost
}: showPostsPropsType) => {
   const currentUserId = userInfo._id;  

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
                  setAllPost={setAllPost}
                  currentUserId={currentUserId}
               />
            ))
         }
      </>
   );
};
