import React from "react";
import { UserInfoType } from "Sharedlib/eventservice";
type CreatePostPropsType = {
    setUpdatePostsSection: React.Dispatch<React.SetStateAction<Number>>;
    userInfo: UserInfoType;
};
export declare const CreatePost: ({ setUpdatePostsSection, userInfo }: CreatePostPropsType) => React.JSX.Element;
export {};
