import type { ICommentsModel } from "../models/CommentsModel";
import type { IResponseDummyComments } from "../models/ResponseDummyComments";

const getComments = async (): Promise<ICommentsModel[]> => {
    const res = await fetch(import.meta.env.VITE_API_BASE_URL + '/comments');
    const response: IResponseDummyComments = await res.json();
    return response.comments;
};

export { getComments };