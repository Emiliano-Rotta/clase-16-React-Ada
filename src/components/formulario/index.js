import { useState } from 'react';
import style from "./Form.module.css";

export default function Form(){

  const[input, setInput] = useState({ nombre: "", apellido: "", mail: "", edad: "", foto: "" })
  const [datos, setDatos] = useState(false)

  function handleChange(e){
      e.preventDefault ();
      setInput({
      ...input,
      [e.target.name] : e.target.value,
      });
  }

  function handleSubmit(e){
      e.preventDefault()
      alert ("Datos guardados con exito")
      setDatos (true)
      // setInput({ nombre: "", apellido: "", mail: "", edad: "", foto: "" })

      
  }
    
  
  return(

    <div>
      <h6><img className ={style.imagen}src = "https://adaitw.org/wp-content/uploads/2021/05/carreras_backend_2021.png"></img></h6>
          
      <form className ={style.contenedor}  onSubmit = {(e)=>handleSubmit(e)} >
     
        <label> </label><br/>
        <input
        placeholder="Nombre: (*)"
        autocomplete="off"
        type = "text"
        value = {input.nombre}
        name = "nombre"
        onChange ={(e)=>handleChange(e)} 
        /> <br/>
                          
        <input  
        autocomplete="off"  
        type="text" 
        value={input.apellido} 
        name='apellido' 
        placeholder="Apellido. (*)"  
        onChange={(e)=>handleChange(e)} 
        /> <br/>

        <input  
        autocomplete="off"  
        type="text" 
        value={input.mail} 
        name='mail' 
        placeholder="Mail. (*)"  
        onChange={(e)=>handleChange(e)} 
        /><br/>

        <input  
        autocomplete="off" 
        type="number" 
        value={input.edad} 
        name='edad'  
        placeholder="Edad. (*)" 
        onChange={(e)=>handleChange(e)}
        /> <br/>

        <input  
        autocomplete="off"  
        type="text" 
        value={input.foto} 
        name='foto'  
        placeholder="Foto. (*)" 
        onChange={(e)=>handleChange(e)}
        /> <br/>

        <button className={style.boton} type='submit'>Guardar datos</button>
          
      </form>
      {datos ?
      (<div className ={style.datos}>
       {input.nombre}, tus datos guardados son: 
       Nombre: {input.nombre}, 
       Apellido: {input.apellido},
       Mail: {input.mail},
       Edad: {input.edad},
       Foto: {input.foto}.

      </div>): <p></p>}
    </div>
  )
}