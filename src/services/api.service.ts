import type {ICommentsModel} from "../models/Modelcomments.ts";
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

const getComments = async (): Promise<ICommentsModel[]> => {
  return await  fetch(endpointComments)
    .then(res => res.json())
}

export {getComments};