import type { IPosts } from "../models/PostsModel";
import type { IResponseDymmyPosts } from "../models/ResponseDymmyPosts";

const getPosts = async (): Promise<IPosts[]> => {
    const response: IResponseDymmyPosts = await fetch(import.meta.env.VITE_API_BASE_URL + '/posts')
    .then(res => res.json())
    return response.posts
};

export {getPosts};