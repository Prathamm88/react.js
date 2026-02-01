import React from 'react'
import {TodoItem} from "./MyComponents/TodoItem";



const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todos List</h3>
      
      {/* {props.todos} */}
      <TodoItem todo={todo}/>
    </div>
  )
}

export default Todos
