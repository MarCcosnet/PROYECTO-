import React, { useState } from 'react';
import "../../App.css";

const CrearProyecto = ({New}) => {
    const [formulario,setFormulario] = useState(false)

    const activarFormulario = () => {
        setFormulario(!formulario)
    }

    const[Registrarse,setRegistrarse] = useState('')
    
    const dato = e => {setRegistrarse(e.target.value)}

    const Click = () => {
        New(Registrarse)
        setRegistrarse('')
    }
    
    return (
      <>
    
      <div className= "d-grid pb-2">
              <button className= "btn btn-outline-danger text-light fs-4 "
                  type= "button"
                  onClick= {activarFormulario}
                  >Nuevo Proyecto </button>
      </div>
      { formulario
      ?   ( <form >
              <div className = 'row'>
                  <div className = 'cold-md-12'>
                      <div className="input-group my-2">
                          <div className= "input-group-pretend">
                              <span className= 'input-group-text text-danger fs-3 fw-bold'>&#x2328;</span>
                          </div>
                      <input
                          type= "text"
                          id="name"
                          className= "form-control fs-3"
                          placeholder= "Nombre proyecto"
                          name ="nombre"
                          value = {Registrarse}
                          onChange={dato}
                          
                          
                      />
                      </div>
                  </div> 
              </div>
              <div className ='row' > 
                  <div  className= 'cold-md-12 text-center mb-4'> 
                      <div className= "d-grid">
                          <button type="button" className ="btn-success bg-gradient fs-2"  onClick={Click} >Guardar Proyecto</button>
                      </div>
                  </div>

              </div>
          </form> 
          
       )
       : null
      }
  </>
  ) 
}

export default  CrearProyecto