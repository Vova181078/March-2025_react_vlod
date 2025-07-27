import type {IPostModel} from "../models/PostModel.ts";


const baseUrl = import.meta.env.VITE_API_POSTS_URL + '/posts';

const getPosts = async (): Promise<IPostModel[]> => {

     return await fetch(baseUrl)
    .then(res => res.json())



}
export { getPosts }