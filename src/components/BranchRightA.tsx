import {useContext} from "react";
import {MyContext} from "../context/Context.tsx";


const BranchRightA = () => {

    const {changeTheme} = useContext(MyContext);

    const handlerDark = ()=> {
        changeTheme('dark')
    }
    const handlerLight = ()=> {
        changeTheme('light')
    }

    return (
        <div>
            Branch Right A:
              <button onClick={handlerDark}>change theme to dark</button>
              <button onClick={handlerLight}>change theme to light</button>

        </div>
    );
};

export default BranchRightA;