
import './App.css'
import {Outlet} from "react-router-dom";
import Menu from "./components/menu/Menu.tsx";
import '../src/components/menu/menu.css'

function App() {


  return (
    <>
       <Menu/>
        <Outlet/>
    </>
  )
}

export default App
