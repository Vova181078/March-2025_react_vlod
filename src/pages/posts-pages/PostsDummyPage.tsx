import PostsDummy from "../../components/posts-components/PostsDummy.tsx";
import {Outlet} from "react-router-dom";


const PostsDummyPage = () => {
    return (
        <div>
            <h2>Posts dummyjson:</h2>
           <PostsDummy/>
            <Outlet/>
        </div>
    );
};

export default PostsDummyPage;