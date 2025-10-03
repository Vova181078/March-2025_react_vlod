
import './App.css'
import UsersComponent from "./components/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <>
        <UsersComponent/>
        <Outlet/>
    </>
  )
}

export default App
