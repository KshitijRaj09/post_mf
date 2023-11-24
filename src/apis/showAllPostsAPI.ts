import { axiosInstance } from "./axiosInstance";
import { getAllPostsApiUrl } from "./apiurlconstants"

export const showAllPostsAPI = async () => {
    try {
        const { data } = await axiosInstance.get(getAllPostsApiUrl);
        return data.map((post: any) => ({ ...post, postId: post._id }))
    }
    catch (error) {
        console.log(error);
    }
}