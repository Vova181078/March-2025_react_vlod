import type { IPosts } from "./PostsModel";

 export interface IResponseDymmyPosts {
    posts:IPosts[]
    views: number,
    userId: number,
}