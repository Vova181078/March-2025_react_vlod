import './App.css'
import {coursesTitleArray} from "./data/coursesTitleArray.ts";

function App() {


  return (
    <>
     <div>
       {
      coursesTitleArray.map((course,index) => <p key={index}>{course}</p>)

       }
     </div>
   </>
  )
}

export default App
