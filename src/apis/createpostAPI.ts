import { axiosInstance } from "./axiosInstance";
import { createPostApiUrl } from "./apiurlconstants"

export const createPostAPI = async (input: any) => {
    try {
        const { data } = await axiosInstance.post(createPostApiUrl, input);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}