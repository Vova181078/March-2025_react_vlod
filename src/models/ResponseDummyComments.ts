import type { ICommentsModel } from "./CommentsModel";



export interface IResponseDummyComments {
   comments: ICommentsModel[]
   total: number;
   skip: number;
   limit: number;
}