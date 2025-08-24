

import {useEffect, useState} from "react";
import type {ICommentsJson} from "../../../models/jsonplaceholder-models/json-comments-model/ICommentsJson.ts";
import CommentJson from "../../comment-components/comment-json-component/CommentJson.tsx";
import {getJsonComments} from "../../../services/api.services.ts";




const CommentsJson = () => {
    const [comments, setComments] = useState<ICommentsJson[]>([]) ;
    useEffect(() => {
        getJsonComments()
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