import type {FC} from "react";
import type {IPostsDummy} from "../../models/dymmyjson-models/dummy-posts-model/IPostsDummy.ts";


type PostDummyProps = {
    item: IPostsDummy
}

const PostDummy:FC<PostDummyProps> = ({item}) => {
    return (
        <div>
            <p>id: {item.id}</p>
            <p>title: {item.title}</p>
            <p>userId: {item.userId}</p>
            <p>body: {item.body}</p>
            <p>tags: {item.tags[0]}</p>
            <p>reactions: {item.reactions.likes}</p>
            <p>views: {item.views}</p>
        </div>
    );
};

export default PostDummy;