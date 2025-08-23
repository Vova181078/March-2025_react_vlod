import type {FC} from "react";

import type {IPostsJson} from "../../models/jsonplaceholder-models/json-posts-models/IPostsJson.ts";


type PostJsonProps = {
    item: IPostsJson
}

const PostJson:FC<PostJsonProps> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.userId}</p>
            <p>{item.body}</p>
        </div>
    );
};

export default PostJson;