import {useEffect} from "react";
import {login} from "../services/api.services.ts";


 const UserLoginComponent = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1,
        });
    }, []);

    return (
        <div>

        </div>
    );
};

export default UserLoginComponent;