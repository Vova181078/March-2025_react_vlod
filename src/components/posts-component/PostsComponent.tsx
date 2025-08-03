import {useEffect, useState } from "react";
import { getPosts } from "../../services/api.service";
import PostComponent from "../post-component/PostComponent";
import type { IPosts } from "../../models/PostsModel";


const PostsComponent = () => {
   const [posts,setPosts] = useState<IPosts[]> ([])
    useEffect(() => {
        getPosts()
            .then(response => {
                setPosts(response)
            })

    }, []);
    return (
        <div>
            {
                posts.map((post) => (<PostComponent key={post.id} item={post}/>))
            }
        </div>
    );
};

export default PostsComponent;

