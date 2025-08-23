import type {FC} from "react";
import type {IPostsDummy} from "../../models/dymmyjson-models/dummy-posts-model/IPostsDummy.ts";


type PostDummyProps = {
    item: IPostsDummy
}

const PostDummy:FC<PostDummyProps> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.userId}</p>
            <p>{item.body}</p>
            <p>{item.tags[0]}</p>
            <p>{item.reactions.likes}</p>
            <p>{item.views}</p>
        </div>
    );
};

export default PostDummy;