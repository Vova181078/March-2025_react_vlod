import type {ICoursesArrayModel} from "../models/ICoursesArrayModel.ts";
import {type FC, type ReactNode,} from "react";



interface ICourseProps {
    courseItem: ICoursesArrayModel,
    children?: ReactNode,
}

export const CourseComponent:FC<ICourseProps> = ({courseItem}) => {
    return (
        <>
            <div>
                <h2>Title: {courseItem.title}</h2>
                <p>MonthDuration: {courseItem.monthDuration}</p>
                <p>HourDuration: {courseItem.hourDuration}</p>
                <ul>Modules:
                    {courseItem.modules.map((modItem,index) => (
                        <li key={index}>{modItem}</li>
                ))}
                </ul>

            </div>

        </>
    );
};

