import type { FC } from "react";
import type { ICommentsModel } from "../../models/CommentsModel";

type CommentProps = {
    item: ICommentsModel;
}

const CommentComponent:FC<CommentProps> = ({item}) => {
    return (
        <div>
            <p>body: {item.body}</p>
            <p>postId: {item.postId}</p>
        </div>
    );
};

export default CommentComponent;