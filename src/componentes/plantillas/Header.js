import React, {} from 'react' 
import { useState } from "react"

const Header = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"Marcos - Victor"})
    }
    const logout = () => {
      setUser(null)
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid  text-white ">
          <span>Usuario: {user? user.nombre : "Desconocido"}</span>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-md-end " id="navbarSupportedContent">
  

            {user 
                ? (<button 
                      className="btn btn-outline-dark text-white " 
                      type="Button" 
                      onClick = {logout} >Cerrar Sesion 
                      
              </button>)
                : (<button 
                      className="btn btn-outline-dark  text-white " 
                      type="Button" 
                      onClick = {login} >Iniciar Sesion
              </button>)
            }
          </div>
        </div>
      </nav>
    )
}

export default  Header
