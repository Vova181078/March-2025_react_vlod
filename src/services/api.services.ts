

import type {IUsersJson} from "../models/jsonplaceholder-models/json-users-model/IJsonModel.ts";
import {urlsDummy, urlsJson} from "../constans/Urls.ts";
import type {IPostsJson} from "../models/jsonplaceholder-models/json-posts-models/IPostsJson.ts";
import type {ICommentsJson} from "../models/jsonplaceholder-models/json-comments-model/ICommentsJson.ts";
import type {IUsersDummy, ResponseDummyUsers} from "../models/dymmyjson-models/dymmy-users-model/IDummyModel.ts";
import type {IPostsDummy, ResponsePosts} from "../models/dymmyjson-models/dummy-posts-model/IPostsDummy.ts";

// ------------JSONPlaceholder---------------------

export const userService = {
    getJsonUsers: async (): Promise<IUsersJson[]> => {
        return await fetch(urlsJson.users.allUsers)
            .then(res => res.json());
    },
    getJsonUser: async (id: number) => {
        return await fetch(urlsJson.users.byId(id))
            .then(res => res.json());
    }
};

export const getJsonPosts = async (): Promise<IPostsJson[]> => {
    return await fetch(urlsJson.posts.allPosts)
        .then(res => res.json());
};

export const getJsonComments = async (): Promise<ICommentsJson[]> => {
    return await fetch(urlsJson.comments.allComments)
        .then(res => res.json());
};

// ---------------- DummyJSON ----------------

export const getDummyUsers = async (): Promise<IUsersDummy[]> => {
    return await fetch(urlsDummy.users.allUsers)
        .then(res => res.json())
        .then((data: ResponseDummyUsers) => data.users);
};

export const getDummyPosts = async (): Promise<IPostsDummy[]> => {
    return await fetch(urlsDummy.posts.allPosts)
        .then(res => res.json())
        .then((data: ResponsePosts) => data.posts);
};

export const getDummyComments = async ():Promise<ICommentsJson[]> => {
    return await fetch(urlsDummy.comments.allComments)
        .then(res => res.json());
};