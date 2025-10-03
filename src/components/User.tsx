import {type FC, memo} from "react";



// memo - використовується для складних компонентів
// де присутня логіка, цикли
// і щоб не було додаткового
// навантаження, а також виводу подвійної інформації

export const User: FC<{ foo: () => void, arr: number[], item: {name: string}  }> = memo(({arr,item}) => {
    console.log('user');
    console.log(arr);
    return (
        <h3>
            {item.name}
        </h3>
    )
})


