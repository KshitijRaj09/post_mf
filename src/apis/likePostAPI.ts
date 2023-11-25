import { axiosInstance } from "./axiosInstance";
import { setLikePost } from "./apiurlconstants"

export const likePostAPI = async (postId: string) => {
    try {
        const { data } = await axiosInstance.put(`${setLikePost}/${postId}`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};