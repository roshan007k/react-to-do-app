import React ,{Fragment} from 'react'

const Todo = ({todo,setTodos,todos}) => {

    const deleteHandler=()=>{
        setTodos(todos.filter(todo1=>(
            todo1.id!==todo.id
        )))
    };
    const completeTodos=()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return {
                ...item,
                completed:!item.completed
                };
            }
            return item;
        })
        );
    };

     
    return (
        <div className="todo">
                <li className={`todo-item ${todo.completed ?"completed":''}` }>{todo.text}</li>
                <button className="complete-btn" onClick={completeTodos} ><i className="fas fa-check"></i></button>
                <button  className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>



        </div>
    )
}

export default Todo
