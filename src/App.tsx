import './App.css'
import {coursesAndDurationArray} from "./data/CoursesAndDurationArray.ts";
import CourseDurationComponent from "./components/CourseDurationComponent.tsx";

function App() {

  return (
    <>
      {
        coursesAndDurationArray.map((course, index) => <CourseDurationComponent key={index} course={course}/>)
      }
    </>
  )
}

export default App
