import React from "react";
import "./styles.css";
import Button from 'react-bootstrap/Button';

const Tarea = (props) => {
  
  const {title, description, index, deleteTask} = props
  return (
    <div className="Tarea">
      <div className="tareaLista">
        <div>
          <input type="checkbox" />
          <span>{index + 1} - </span>
          <span>{title}</span>
        </div>
        <div>
          <Button onClick={()=> deleteTask(index)} variant="danger" style={{borderRadius: "50%"}}>X</Button>
      </div>
        </div>
      <p>{description}</p>
    </div>
  );
};

export default Tarea;