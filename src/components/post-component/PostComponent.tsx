
import type {FC} from "react";
import type {IPosts} from "../../models/IPosts.ts";


type PostProps = {
    item: IPosts;
}

const PostComponent:FC<PostProps> = ({item}) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <div>{item.body}</div>

        </div>
    );
};

export default PostComponent;