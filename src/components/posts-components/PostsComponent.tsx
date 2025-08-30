import {useEffect, useState} from "react";
import type {IPosts} from "../../models/posts-model/IPosts.ts";
import PostComponent from "../post-component/PostComponent.tsx";
import {getPosts} from "../../services/api.service.ts";


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        getPosts()
        .then(posts => setPosts(posts));
    }, [])
    return (
        <div>
            {posts.map((post) => (<PostComponent key={post.id} item={post} />))}
        </div>
    );
};

export default PostsComponent;