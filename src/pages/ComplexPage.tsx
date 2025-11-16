
import {useAppDispatch, useAppSelector} from "../redux/store.tsx";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import type {IUsers} from "../models/IUsers.ts";
import UserComponent from "../components/user-component/UserComponent.tsx";
import CommentComponent from "../components/comment-component/CommentComponent.tsx";


const ComplexPage = () => {

    const dispatch = useAppDispatch();
    const  {
        userStoreSlice: {users},
        postStoreSlice: {posts},
        commentStoreSlice: {comments}
    } = useAppSelector(state => state);

    useEffect(() => {

        if (!users.length) {
            dispatch(userActions.loadUsers())
        }
        if (!posts.length) {
            dispatch(postActions.loadPosts())
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments())
        }
    }, []);

    return (
        <div>
            {users.map((user: IUsers) => (
                <UserComponent key={user.id} item={user} />
            ))}

            {posts.map((post: IPosts) => (
                <PostComponent key={post.id} item={post} />
            ))}

            {comments.map((comment: IComment) => (
                <CommentComponent key={comment.id} item={comment} />
            ))}
        </div>
    );
};

export default ComplexPage;