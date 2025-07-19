import type {FC} from "react";
import type {ICoursesAndDuration} from "../model/ICoursesAndDuration.ts";



interface ICourseProps {
  course: ICoursesAndDuration;
}


const CourseDurationComponent:FC<ICourseProps> = ({course}) => {
    return (
        <div>
            <h2>{course.title}</h2>
            <h2>{course.monthDuration}</h2>
        </div>
    );
};

export default CourseDurationComponent;