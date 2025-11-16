import type {FC} from "react";
import type {IComments} from "../../models/IComments.ts";


type CommentProps = {
    item: IComments;
}

const CommentComponent:FC<CommentProps> = ({item}) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <div>{item.name}</div>
            <div>{item.body}</div>

        </div>
    );
};

export default CommentComponent;