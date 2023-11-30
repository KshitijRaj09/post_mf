import React from "react";
import type { PostsType } from '../typedeclaration/types';
type SinglePostPropsType = {
    currentUserId: string;
    setAllPost: React.Dispatch<React.SetStateAction<PostsType[]>>;
} & PostsType;
export declare const SinglePost: ({ likes, username, postContent, updatedAt, createdAt, userId, postId, setAllPost, currentUserId }: SinglePostPropsType) => React.JSX.Element;
export {};
