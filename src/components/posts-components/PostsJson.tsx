

import {useEffect, useState} from "react";
import type {IPostsJson} from "../../models/jsonplaceholder-models/json-posts-models/IPostsJson.ts";
import PostJson from "../post-components/PostJson.tsx";
import {getJsonPosts} from "../../services/api.services.ts";




const PostsJson = () => {
    const [posts, setPosts] = useState<IPostsJson[]>([]) ;
    useEffect(() => {
       getJsonPosts()
            .then(data => setPosts(data));
    })
    return (
        <div>
            {
                posts.map((post) => (<PostJson key={post.id} item={post}/>))
            }
        </div>
    );
};

export default PostsJson;