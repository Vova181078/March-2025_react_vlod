import {simpsons} from "../data/SimpsonData.ts";
import CharacterComponent from "./CharacterComponent.tsx";



export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((item,index) => <CharacterComponent objectSimpson={item} key={index}>
                        {item.info}
                   </CharacterComponent>
                    )}
                )


        </div>
    );
};
