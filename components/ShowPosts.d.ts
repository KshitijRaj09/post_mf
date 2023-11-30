import React from "react";
import type { PostsType } from "../typedeclaration/types";
import { UserInfoType } from "@kshitijraj09/sharedlib_mf";
type showPostsPropsType = {
    userInfo: UserInfoType;
    allPost: PostsType[];
    setAllPost: React.Dispatch<React.SetStateAction<PostsType[]>>;
};
export declare const ShowPosts: ({ userInfo, allPost, setAllPost }: showPostsPropsType) => React.JSX.Element;
export {};
