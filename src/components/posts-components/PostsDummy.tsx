

import {useEffect, useState} from "react";
import type {IPostsDummy} from "../../models/dymmyjson-models/dummy-posts-model/IPostsDummy.ts";
import PostDummy from "../post-components/PostDummy.tsx";
import {getDummyPosts} from "../../services/api.services.ts";


const PostsDummy = () => {
    const [posts, setPosts] = useState<IPostsDummy[]>([]);
    useEffect(() => {
        getDummyPosts()
            .then(data => setPosts(data));
    })
    return (
        <div>
            {
                posts.map((post) => (<PostDummy key={post.id} item={post}/>))
            }
        </div>
    );
};

export default PostsDummy;