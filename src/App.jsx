import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

const [todos, setTodo]= useState([])
const [todoItem, setTodoItem]=useState('')

function persistData(newList){
  localStorage.setItem('todos', JSON.stringify({todos: newList}))
}

function handleAddTodos(newItem){
  if(newItem){
    setTodo([...todos,newItem])  //adding new items to the todo list
    persistData([...todos,newItem])}
}
function handleEditTodos(index){
  const editedValue= todos[index]
  setTodoItem(editedValue)
  handleDeleteTodos(index)  
}
function handleDeleteTodos(index){
  const newTodoList= todos.filter((todo,todoIndex)=>{
    return todoIndex !== index
  })
  setTodo(newTodoList)
  persistData(newTodoList)
}

useEffect(()=>{
  if (!localStorage){
    return
  }
  let localTodos= localStorage.getItem('todos')
  if (!localTodos){
    return
  }
  localTodos=JSON.parse(localTodos).todos
  setTodo(localTodos)

},[])
  return (
    <>
      <>
        <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} handleAddTodos={handleAddTodos} />
        <TodoList handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos}/>
      </>
    </>
  )
}

export default App
