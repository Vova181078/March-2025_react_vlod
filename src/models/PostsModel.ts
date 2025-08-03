import type { IReactions } from "./ReactionModel";

export interface IPosts {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}


