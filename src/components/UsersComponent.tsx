//  useCallBack - використовується для
//  кешування пропсів які можуть
//  являтися обєктами або функціями,
//  запамятовує саму функцію.

// useMemo - кешує результат обчислення,


import {useFetch} from "../hooks/useFetch.tsx";
import {useCallback, useMemo} from "react";
import {User} from "./User.tsx";

export const UsersComponent = () => {
    console.log('users');

    const users = useFetch();

    const arr: number[] = useMemo( () => {
        return [1,2,3,4,5,6,7]
        }, []);

    const foo = useCallback(() => {
             console.log('test')
        }, []);


    return (

        <div> users component
            {
           users.map(value => <User item={value} foo={foo} arr={arr}/> )

            }

        </div>


    )
}



export default UsersComponent;