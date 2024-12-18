import { useState } from "react"

export default function TodoInput (props) {
    const {handleAddTodos, todoItem, setTodoItem}=props
    return (
      <header>
        <input value={todoItem}
         onChange={(e)=>{setTodoItem(e.target.value)}}
         placeholder="Enter todo..." />
        <button onClick={()=>{
            handleAddTodos(todoItem)
            setTodoItem('')}
        }>ADD</button>
      </header>
    )
  }