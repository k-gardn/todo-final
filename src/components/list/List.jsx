import React from "react"
import './style.css'
import Todo from '../todo/Todo'



function List({todos , setTodos}) {

  const onDeleteHandler = (selectedId) => {
    const remainedTodos = todos.filter((todo)=>{
        return todo.id !== selectedId
    })
    setTodos(remainedTodos)
}

  // function onDeleteHandler (selectedId) {
  //   return (
  //     const remaindedTodos = todos.filter(function(todo){
  //       return (todo.id !== selectedId)
  //     })
  //   )
    
    const onCompleteHandler = (selectedId)=>{
      const newTodos = todos.map((todo)=>{
        if(todo.id === selectedId){
          //기존에 존재하는 todo인 경우 
          return {...todo , isDone : !todo.isDone }
        }
        else{
          return {...todo}
        }
      })
      setTodos(newTodos)
    }

  



    return (
      <div>
        <h1>진행중...</h1>
        <div>
          {todos.map((todo)=> {
            if(todo.isDone === false){
              return <Todo todo = {todo} key = {todo.id} setTodos={setTodos} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler} />
            }
          })}
        </div>
        <h1>완료🎉</h1>
        <div>
          {todos.map((todo)=> {
            if(todo.isDone === true){
              return <Todo todo = {todo} key = {todo.id} setTodos={setTodos} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler} />
            }
          })}
        </div>

      </div>
    )
}
export default List
