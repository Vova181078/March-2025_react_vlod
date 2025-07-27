import {useEffect, useState} from "react";
import type {IPostModel} from "../../models/PostModel.ts";
import PostComponent from "../post-component/PostComponent.tsx";
import './posts.css'
import {getPosts} from "../../services/api.service.ts";

const PostsComponent = () => {
    const [posts, Setposts] = useState<IPostModel[]>([])

    useEffect(() => {
         const fetchData = async () => {
            const postsResponse = await getPosts();
            Setposts(postsResponse);


         }
              fetchData();



    }, [])

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    )
};

export default PostsComponent;