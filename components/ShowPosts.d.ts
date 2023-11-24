import React from "react";
import { UserInfoType } from "@kshitijraj09/sharedlib_mf";
type showPostsPropsType = {
    updatePostsSection: Number;
    setUpdatePostsSection: React.Dispatch<React.SetStateAction<Number>>;
    userInfo: UserInfoType;
};
export declare const ShowPosts: ({ updatePostsSection, setUpdatePostsSection, userInfo }: showPostsPropsType) => React.JSX.Element;
export {};
