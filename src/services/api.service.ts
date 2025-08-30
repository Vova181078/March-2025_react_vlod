import type {IUsers, ResponseUsers} from "../models/users-model/IUsers.ts";
import type {IPosts, ResponsePosts} from "../models/posts-model/IPosts.ts";
const DummyUrl = import.meta.env.VITE_BASE_URL

export const getUsers  = async ():Promise<IUsers[]> => {
  const res = await fetch(`${DummyUrl}/users`)
    const data: ResponseUsers = await res.json();
    return data.users;
}

export const getPosts = async ():Promise<IPosts[]> => {
  const res = await  fetch(`${DummyUrl}/posts`)
    const data: ResponsePosts = await res.json();
    return data.posts;

}



