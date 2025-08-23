import type {FC} from "react";
import type {ICommentsJson} from "../../../models/jsonplaceholder-models/json-comments-model/ICommentsJson.ts";



type CommentJsonProps = {
    item: ICommentsJson
}

const CommentJson:FC<CommentJsonProps> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.postId}</p>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.body}</p>
        </div>
    );
};

export default CommentJson;