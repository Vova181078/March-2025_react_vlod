import type {FC} from "react";
import type {ICommentsJson} from "../../../models/jsonplaceholder-models/json-comments-model/ICommentsJson.ts";



type CommentJsonProps = {
    item: ICommentsJson
}

const CommentJson:FC<CommentJsonProps> = ({item}) => {
    return (
        <div>
            <p>id: {item.id}</p>
            <p>postId: {item.postId}</p>
            <p>name: {item.name}</p>
            <p>email: {item.email}</p>
            <p>body: {item.body}</p>
        </div>
    );
};

export default CommentJson;