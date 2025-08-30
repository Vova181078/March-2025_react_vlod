import type {Reactions} from "./Reactions.ts";


export interface IPosts {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface ResponsePosts {
  posts: IPosts[];
    total: number;
    skip: number;
    limit: number
}