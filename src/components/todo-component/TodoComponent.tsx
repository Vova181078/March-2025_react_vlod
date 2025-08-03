import type {ITodosModel} from "../../models/TodosModel.ts";
import type {FC} from "react";

type PropsTodo = {
    item:ITodosModel
}

const TodoComponent:FC<PropsTodo> = ({item}) => {
    return (
        <div>
            <p>todo: {item.todo}</p>
            <p>completed: {item.completed.toString()}</p>
            <p>userId: {item.userId}</p>
        </div>
    );
};

export default TodoComponent;