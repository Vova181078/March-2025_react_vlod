import {useAppDispatch, useAppSelector} from "../redux/store.tsx";
import {postActions} from "../redux/slices/PostSlice.ts";
import {useEffect} from "react";
import type {IPosts} from "../models/IPosts.ts";
import PostComponent from "./post-component/PostComponent.tsx";



const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts)
    useEffect(() => {

        dispatch(postActions.loadPosts());
    }, []);
    return (
        <div>
            {
                posts.map((post: IPosts) => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};
export default PostsComponent;