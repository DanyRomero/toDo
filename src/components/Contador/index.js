import React from 'react'
import Badge from 'react-bootstrap/Badge';


const Contador = (props) => {
  return (
    <Badge bg="secondary">1/{props.allTasks.length}</Badge>
  )
}

export default Contador