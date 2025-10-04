
import './App.css'
import BranchLeft from "./components/BranchLeft.tsx";
import BranchRight from "./components/BranchRight.tsx";
import {MyContext} from "./context/Context.tsx";
import {useState} from "react";



function App() {

const [themeColor, setThemeColor] = useState<string>('light');
  return (
    <div>
        <MyContext.Provider value={{
            theme: themeColor,
            changeTheme: (theme: string) => {
                setThemeColor(theme)
            }

        }}>

       <BranchLeft/>
       <BranchRight/>

        </MyContext.Provider>

    </div>
  )
}

export default App
