import React, { memo, useEffect, useState } from "react";
import {CreatePost} from "./CreatePost";
import { ShowPosts } from "./ShowPosts";
import { WindowEvents, default as WindowEventService } from "Sharedlib/eventservice";
import Loader from "./Loaders";
import { UserInfoType } from "@kshitijraj09/sharedlib_mf";

const Posts = () => {
   const [updatePostsSection, setUpdatePostsSection] = useState<Number>(0);
   const [userInfo, setUserInfo] = useState<UserInfoType>();
   const [loading, setLoading] = useState(true);

   const eventName = 'currentUser' as typeof WindowEvents.currentUser;
   useEffect(() => {
      import("Sharedlib/eventservice").
         then((event) => {
            event.default.subscribe(eventName, updateCurrentUserInfo)
         }).catch(error => {
            console.error('Error occured in event', error);
         })
      return () => {
         WindowEventService.unsubscribe(eventName, updateCurrentUserInfo)
      }
   }, []);

   const updateCurrentUserInfo = (event: Event) => {
      const { detail }  = event as CustomEvent;
      setUserInfo(detail);
      setLoading(false);
   }

   return (
      <> {
         loading ? <Loader /> :
         <>
            <CreatePost setUpdatePostsSection={setUpdatePostsSection} userInfo={userInfo} />
            <ShowPosts
               updatePostsSection={updatePostsSection}
               setUpdatePostsSection={setUpdatePostsSection}
               userInfo={userInfo}
            />
         </>
      }
      </>
   );
};

const MemorizedPost = memo(Posts);
export default MemorizedPost;