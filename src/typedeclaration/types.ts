export type PostsType = {
   postId: string;
   postContent: string;
   userId: string;
   likes: Array<string>;
   username: string;
   createdAt: Date;
   updatedAt: Date;
}