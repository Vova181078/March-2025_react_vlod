import type {FC} from "react";

import type {IPostsJson} from "../../models/jsonplaceholder-models/json-posts-models/IPostsJson.ts";


type PostJsonProps = {
    item: IPostsJson
}

const PostJson:FC<PostJsonProps> = ({item}) => {
    return (
        <div>
            <p>id: {item.id}</p>
            <p>title: {item.title}</p>
            <p>userId: {item.userId}</p>
            <p>body: {item.body}</p>
        </div>
    );
};

export default PostJson;