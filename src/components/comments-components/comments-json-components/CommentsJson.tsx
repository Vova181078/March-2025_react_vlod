

import {useEffect, useState} from "react";
import type {ICommentsJson} from "../../../models/jsonplaceholder-models/json-comments-model/ICommentsJson.ts";
import CommentJson from "../../comment-components/comment-json-component/CommentJson.tsx";




const CommentsJson = () => {
    const [comments, setComments] = useState<ICommentsJson[]>([]) ;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    })
    return (
        <div>
            {
                comments.map((comment) => (<CommentJson key={comment.id} item={comment}/>))
            }
        </div>
    );
};

export default CommentsJson;