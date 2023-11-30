import React from "react";
import { UserInfoType } from "@kshitijraj09/sharedlib_mf";
import { PostsType } from "../typedeclaration/types";
type CreatePostPropsType = {
    userInfo: UserInfoType;
    setAllPost: React.Dispatch<React.SetStateAction<PostsType[]>>;
};
export declare const CreatePost: ({ userInfo, setAllPost }: CreatePostPropsType) => React.JSX.Element;
export {};
