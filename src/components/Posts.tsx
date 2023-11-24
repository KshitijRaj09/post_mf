import React, { memo, useEffect, useState } from "react";
import {CreatePost} from "./CreatePost";
import { ShowPosts } from "./ShowPosts";
import { WindowEvents, default as WindowEventService } from "Sharedlib/eventservice";
import Loader from "./Loaders";

const Posts = () => {
   const [updatePostsSection, setUpdatePostsSection] = useState<Number>(0);
   const [userInfo, setUserInfo] = useState({
      username: '',
      name: '',
      avatar: '',
      userid: ''
   });
   const [loading, setLoading] = useState(true);

      const eventName = 'currentUser' as typeof WindowEvents.currentUser;
   useEffect(() => {
      import("Sharedlib/eventservice").
         then((event) => {
            event.default.subscribe(eventName, updateCurrentUserInfo)
         }).catch(error => {
            console.error('Error occured in event', error);
         })
      console.log('called here ', WindowEventService);
      return () => {
         WindowEventService.unsubscribe(eventName, updateCurrentUserInfo)
      }
   }, []);

   const updateCurrentUserInfo = (event: Event) => {
      const { detail }  = event as CustomEvent;
      console.log(detail,'detail');
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