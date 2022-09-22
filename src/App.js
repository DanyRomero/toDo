import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import NavbarComponent from './components/Navbar';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas'


function App() {
  const allInitialTasks = [
    {
      title:"Hacer que funcione el To Do",
      description:"Aprendiendo React",
      complete: "false",
    },
    {
      title:"Labs",
      description:"Practicando React",
      complete: "false"
    },
    {
      title:"Hacer el proyecto",
      description:"Aprendiendo y practicando TODOOO",
      complete: "false"
    },

  ]

  const [allTasks, setAllTasks] = useState(allInitialTasks)

  const sendTask = (newTask) =>{
   
    /* como actualizar un arreglo con nuevos datos 
      1. crea la copia con spreadOperator  para arreglos
      2. agregar el nuevo objeto al arreglo copia
      3. actualizar el estado con el nuevo arreglo
    */
    const newArray = [...allTasks, newTask];

    setAllTasks(newArray);
  }

  const deleteTask = (i) =>{
  
    /* crea la copia del arreglo con el spreadOperator */
    const newArray = [...allTasks]
    newArray.splice(i,1)
  
    setAllTasks(newArray)

  }
  return (
    <div className="App">
      <NavbarComponent  allTasks= {allTasks}/>
      <Container>
        <Row>
          <Col>
            <Formulario  sendTask={sendTask}/>
          </Col>
          <Col>
            <ListaTareas allTasks={allTasks} deleteTask={deleteTask}/>
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;
