import type {ISimpson} from "../models/ISimpsonsModel.ts";
import type {FC, ReactNode} from "react";

interface ICharacterProps {
    objectSimpson: ISimpson,
    children: ReactNode,

}

export const CharacterComponent:FC<ICharacterProps> = ({objectSimpson,children}) => {
    return (
        <div>
            <h2>{objectSimpson.name} {objectSimpson.surname}</h2>
            <p>age: {objectSimpson.age}</p>
            <p>{children}</p>
            <img src={objectSimpson.photo}/>
        </div>
    );
};


export default CharacterComponent;