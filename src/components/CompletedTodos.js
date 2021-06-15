import React ,{Fragment} from 'react'

const CompletedTodos = (todo) => {
    return (
        <div className="todo">
        {todo.completed ? 
            <Fragment>
                <li className="todo-item">{todo.text}</li>
                {/* <button className="complete-btn" onClick={completeTodos} ><i className="fas fa-check"></i></button>
                <button  className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button> */}
            </Fragment>:<Fragment />}
        </div>
    )
}

export default CompletedTodos;