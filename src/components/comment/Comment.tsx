import type {ICommentsModel} from "../../models/Modelcomments.ts";
import type {FC} from "react";

type CommentProps = {
    item:ICommentsModel
}


const Comment:FC<CommentProps> = ({item}) => {
    return (
        <div>
            <p>id: {item.id}</p>
            <p>name: {item.name}</p>
            <p>email: {item.email}</p>
            <p>body: {item.body}</p>
        </div>
    );
};

export default Comment;