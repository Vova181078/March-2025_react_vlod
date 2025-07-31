import {useEffect, useState} from "react";
import type {ICommentsModel} from "../../models/Modelcomments.ts";
import {getComments} from "../../services/api.service.ts";
import Comment from "../comment/Comment.tsx";
import './comments.css'


const Comments = () => {
    const [comments, setComments] = useState<ICommentsModel[]>([])
    useEffect(() => {
       getComments()
            .then((value) => setComments(value));
            },
         [])
    return (
        <div>
            {
                comments.map((comment) => (<Comment key={comment.id} item={comment} />))
            }
        </div>
    );
};

export default Comments;