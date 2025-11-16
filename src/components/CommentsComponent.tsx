import {useAppDispatch, useAppSelector} from "../redux/store.tsx";
import {useEffect} from "react";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import CommentComponent from "./comment-component/CommentComponent.tsx";


const CommentsComponent = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(() => {

        dispatch(commentActions.loadComments());
    }, []);
    return (
        <div>
            {
                comments.map((comment) => <CommentComponent key={comment.id} item={comment}/>)
            }
        </div>
    );
};
export default CommentsComponent;