import type {IUsers} from "../models/IUsers.ts";
import type {IPosts} from "../models/IPosts.ts";
import type {IComments} from "../models/IComments.ts";

export const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<IUsers[]> => {
    const users = await fetch(baseUrl + "/users");
    if (!users.ok) {
        throw new Error("Failed to load users");
    }
    return await users.json();
};

export const getPosts = async (): Promise<IPosts[]> => {
    const posts = await fetch(baseUrl + "/posts");
    if (!posts.ok) {
        throw new Error("Failed to load posts");
    }
    return await posts.json();
};

export const getComments = async (): Promise<IComments[]> => {
    const comments = await fetch(baseUrl + "/comments");
    if (!comments.ok) {
        throw new Error("Failed to load comments");
    }
    return await comments.json();
};