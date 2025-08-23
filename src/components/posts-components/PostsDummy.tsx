

import {useEffect, useState} from "react";
import type {IPostsDummy} from "../../models/dymmyjson-models/dummy-posts-model/IPostsDummy.ts";
import PostDummy from "../post-components/PostDummy.tsx";


const PostsDummy = () => {
    const [posts, setPosts] = useState<IPostsDummy[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    })
    return (
        <div>
            {
                posts.map((post) => (<PostDummy key={post.id} item={post} />))
            }
        </div>
    );
};

export default PostsDummy;