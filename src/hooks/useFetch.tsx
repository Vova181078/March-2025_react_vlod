import {useEffect, useState} from "react";


const UseFetch = <T, >  (url:string, defaultValue: T) => {
    const [object, setObject] = useState<T>(defaultValue)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(resp => {
                setObject(resp);
            });
    }, []);

    return object;
}

export default UseFetch