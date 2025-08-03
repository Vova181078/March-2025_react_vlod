import {useEffect, useState} from "react";
import {getTodos} from "../../services/api.services.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import type {ITodosModel} from "../../models/TodosModel.ts";
import './todos.css'


const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodosModel[]>([]);
    useEffect(() => {
       getTodos()
           .then(response => {

               setTodos(response);
           })

    }, []);
    return (
       <div>

            {
               todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }

       </div>

    );
};

export default TodosComponent;