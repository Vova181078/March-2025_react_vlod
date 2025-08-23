export const baseJsonUrl = "https://jsonplaceholder.typicode.com";
export const baseDummyUrl = "https://dummyjson.com";

export const urlsJson = {
    users: {
        allUsers: baseJsonUrl + "/users",
        byId: (id: number) => baseJsonUrl + "/users/" + id
    },
    posts: {
        allPosts: baseJsonUrl + "/posts",
        byId: (id: number) => baseJsonUrl + "/posts/" + id
    },
    comments: {
        allComments: baseJsonUrl + "/comments",
        byId: (id: number) => baseJsonUrl + "/comments/" + id
    }
};

export const urlsDummy = {
    users: {
        allUsers: baseDummyUrl + "/users",
        byId: (id: number) => baseDummyUrl + "/users/" + id
    },
    posts: {
        allPosts: baseDummyUrl + "/posts",
        byId: (id: number) => baseDummyUrl + "/posts/" + id
    },
    comments: {
        allComments: baseDummyUrl + "/comments",
        byId: (id: number) => baseDummyUrl + "/comments/" + id
    }
};