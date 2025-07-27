import type {FC} from "react";
import type {IPostModel} from "../../models/PostModel.ts";

type MyPostProps = {
   item:IPostModel

}

const PostComponent:FC<MyPostProps> = ({item}) => {
    return (
        <div>

                <p>id: {item.id}</p>
                <p>title: {item.title}</p>
                <p>body: {item.body}</p>

        </div>
    );
};

export default PostComponent;