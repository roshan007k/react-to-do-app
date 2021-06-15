import React from 'react'
import Todo from './Todo';
// import CompletedTodos from './CompletedTodos';
const TodoList = ({todos,setTodos,filteredTodos}) => {
    return (
        <div class="todo-container">
            <ul class="todo-list">

               {filteredTodos.length>0? filteredTodos.map(todo =>(
                   <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}>

                   </Todo>
               )): todos.map(todo =>(
                <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}>

                </Todo>))}


            </ul>
                
        </div>
    )
}


export default TodoList;
