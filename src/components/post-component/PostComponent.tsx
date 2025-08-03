import type { FC } from "react";
import type { IPosts } from "../../models/PostsModel";

type PostsProps = {
    item: IPosts
}

const PostComponent:FC<PostsProps> = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </div>
    );
};

export default PostComponent;