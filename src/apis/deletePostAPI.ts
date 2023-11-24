import { axiosInstance } from "./axiosInstance";
import { postApiRoute } from "./apiurlconstants"

export const deletePostAPI = async (postId: string) => {
    try {
        const { data } = await axiosInstance.delete(`${postApiRoute}/${postId}`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};