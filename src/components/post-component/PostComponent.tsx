import type {FC} from "react";
import type {IPosts} from "../../models/posts-model/IPosts.ts";

type PostProps = {
    item: IPosts;
}


const PostComponent:FC<PostProps> = ({item}) => {
    return (
        <div>
               <h3>title: {item.title}</h3>
                <p>body: {item.body}</p>
                <p>tags: {item.tags[0]}</p>
                <p>reactions: {item.reactions.likes}</p>
                <p>views: {item.views}</p>
                <p>userId: {item.userId}</p>

        </div>
    );
};

export default PostComponent;