

import type {FC} from "react";
import type {IToDosModel} from "../../models/IToDosModel.ts";

type ToDoType = {
    todoItem: IToDosModel,

}


const TodoComponent:FC<ToDoType> = ({todoItem}) => {
    return (
        <div>
            {todoItem.id} {todoItem.title} {todoItem.completed}
        </div>
    );
};

export default TodoComponent;