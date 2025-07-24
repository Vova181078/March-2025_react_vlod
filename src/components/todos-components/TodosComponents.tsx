import {useEffect, useState} from "react";
import {getToDos} from "../../services/api.service.ts";
import type {IToDosModel} from "../../models/IToDosModel.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";




const TodosComponents = () => {
       const [toDos,SetToDos] = useState<IToDosModel[]>([])
    useEffect(() => {
        getToDos().then()
            .then(response => {
                SetToDos(response)
            } )
    }, []);
    return (
        <div>
            {
              toDos.map(todo => <TodoComponent key={todo.id} todoItem={todo}/>)
            }
        </div>
    );
};

export default TodosComponents;