import React, { memo, useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import {CreatePost} from "./CreatePost";
import { ShowPosts } from "./ShowPosts";
import Loader from "./Loaders";
import { UserInfoType, WindowEvents, WindowEventService } from "@kshitijraj09/sharedlib_mf";
import { PostsType } from "../typedeclaration/types";
import { showAllPostsAPI } from "../apis/showAllPostsAPI";

declare global {
   interface Window {
      socket: Socket;
   }
}

const Posts = () => {
   const socket = window.socket;
   // const [updatePostsSection, setUpdatePostsSection] = useState<Number>(0);
   const [userInfo, setUserInfo] = useState<UserInfoType>();
   const [loading, setLoading] = useState(true);
   const [allPost, setAllPost] = useState<PostsType[]>([]);
   const eventRef = useRef<typeof WindowEventService>();

   const eventName: WindowEvents = 'currentUser';
   useEffect(() => {
      import("Sharedlib/eventservice").
         then((event) => {
            eventRef.current = event.default;
            event.default.subscribe(eventName, updateCurrentUserInfo)
         }).catch(error => {
            console.error('Error occured in event', error);
         })
      return () => {
         eventRef.current.unsubscribe(eventName, updateCurrentUserInfo)
      }
   }, []);

   useEffect(() => {
      socket?.on('newpost-from-server', (post) => {
         setAllPost((prevPost) => [post, ...prevPost]);
      });

      socket?.on('deletepost-from-server', (postId) => {
         setAllPost((prevPost)=>prevPost.filter(post=>post.postId !== postId));
      });

      showPosts();
      return () => {
         socket?.off('newpost-from-server');
         socket?.off('deletepost-from-server');
      }
   }, [socket]);

   const showPosts = async () => {
      const data = await showAllPostsAPI();
      setAllPost(data);
   };

   const updateCurrentUserInfo = (event: Event) => {
      const { detail }  = event as CustomEvent;
      setUserInfo(detail);
      setLoading(false);
   }

   return (
      <> {
         loading ? <Loader /> :
         <>
            <CreatePost
               userInfo={userInfo}
               setAllPost={setAllPost}
            />
            <ShowPosts
               userInfo={userInfo}
               allPost={allPost} 
               setAllPost={setAllPost} 
            />
         </>
      }
      </>
   );
};

const MemorizedPost = memo(Posts);
export default MemorizedPost;