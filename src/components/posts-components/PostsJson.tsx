

import {useEffect, useState} from "react";
import type {IPostsJson} from "../../models/jsonplaceholder-models/json-posts-models/IPostsJson.ts";
import PostJson from "../post-components/PostJson.tsx";




const PostsJson = () => {
    const [posts, setPosts] = useState<IPostsJson[]>([]) ;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
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