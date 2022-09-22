import React from 'react'
import Tarea from '../Tarea'

const ListaTareas = (props) => {
  const {allTasks}= props;
  return (
    <div>
      <h2>ListaTareas</h2>
      {allTasks.map((task, i)=>{
        return <Tarea key={i} {...task} index={i} deleteTask={props.deleteTask}/>
      })}
    </div>
      

  )
}

export default ListaTareas;