import {useContext} from "react";
import {MyContext} from "../context/Context.tsx";
import './branchLeftA.css'

const BranchLeftA = () => {

    const {theme} = useContext(MyContext);

    return (
        <div className= {theme}>
            Branch Left A <br/>
         change theme: <h3>{theme}</h3>

        </div>
    );
};

export default BranchLeftA;