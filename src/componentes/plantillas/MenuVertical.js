import React from 'react'
import MostrarProyecto from '../proyectos/MostrarProyectos'
const MenuVertical = () => {
    return (
        <aside className = "text-center p-4">
          {/* <h2 className="fst-italic text-danger bg-success bg-gradient fw-bold p-4">Gestor<span className="text-light">Proyectos</span></h2>
           <CrearProyecto/> */}
            <h2 className="fst-italic text-light bg-success bg-gradient fw-bold py-2" Style="background-color:#ffc800">Gestor<spam className="text-danger">Proyectos</spam></h2>
           <MostrarProyecto/>
        </aside>
    )
}

export default MenuVertical