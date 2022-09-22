
import Button from 'react-bootstrap/Button'
import './styles.css'
import React, {useState} from "react"

const Formulario = (props) => {

  /* Formularios controlados
    1. crear un estado
    2. vincular input con el estado--- con value 
    3. manejar el evento onChange
      3.1 generamos una funcion que reciba el evento
      3.2 vinvular el onChange con la funcion del paso pasado
      3.3 debemos actualizar el estado accediendo al event.target.value y utilizando la funcion que actualize el estado
    4. Cuando tenemos controlados todos los inputs vamos a manejar el evento onSubmit del formulario
      4.1 generar una funcion que reciba el event
      4.2 vincular el onSubmit de formulario con la funcion del paso 4.1
  */
  
  const [title, setTitle] = useState(""); /* paso 1 */
  function handleChange(event){     /* paso 3.1 */
    setTitle(event.target.value);  /* paso 3.3 */
  }

  const[description, setDescription] =useState("");
  function handleDescription(event){
    setDescription(event.target.value);
  }

  function sendData(event){  /* paso 4.1 */
    event.preventDefault();
    props.sendTask({
      title: title,
      description: description,
      complete: false,
    });
    setTitle("")
    setDescription("")
  }

  return (
    <form className='formulario' onSubmit={sendData} /* paso 4.2 */>
        <h2>Agrega tu tarea</h2>
        <input  placeholder='Ingresa el título' 
          value={title} /* paso 2 */
          onChange={handleChange} /* paso 3.2 */
        />
        <input  placeholder='Ingresa la descripción'
          value={description}
          onChange={handleDescription}
        />
        <Button variant="primary" type="submit">Agregar</Button>
        
    </form>
  )
}

export default Formulario