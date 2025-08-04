import {useEffect, useState } from "react";
import type { ICommentsModel } from "../../models/CommentsModel";
import { getComments } from "../../services/api.service";
import CommentComponent from "../comment-component/CommentComponent";



const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentsModel[]>([])
    useEffect(() => {
        getComments()
            .then(response => {
                setComments(response)
            })

    }, []);

    return (
        <div>
            {comments.map((comment) => (<CommentComponent key={comment.id} item={comment}/>))}
        </div>
    );
};



export default CommentsComponent;