import React from "react";
import type { PostsType } from '../typedeclaration/types';
type SinglePostPropsType = {
    currentUserId: string;
    setUpdatePostsSection: React.Dispatch<React.SetStateAction<Number>>;
} & PostsType;
export declare const SinglePost: ({ likes, username, postContent, updatedAt, createdAt, userId, postId, setUpdatePostsSection, currentUserId }: SinglePostPropsType) => React.JSX.Element;
export {};
