import {coursesArray} from "../data/coursesArray.ts";
import {CourseComponent} from "./CourseComponent.tsx";



export const CoursesArrayComponent = () => {
    return (
        <div>
            {
                coursesArray.map((value,index) => <CourseComponent key={index} courseItem={value}>
                        {value.title}
                        {value.monthDuration}
                        {value.hourDuration}
                        {value.modules.map((module,index)=> (
                           <ul key={index}>
                               {
                                  <li>{module}</li>
                               }
                           </ul>

                        ))}
                </CourseComponent>)
            }
        </div>
    );
};
