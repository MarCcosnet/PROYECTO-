import React from 'react'

const Tarea = ({tarea}) => {
    return(
            <tr className="text-light">
                <td>{tarea.nombre}</td>
                <td>{tarea.estado
                    ?(<buttton className ="btn btn-success">Completada</buttton>)
                    :(<buttton className ="btn btn-warning">Incompleta</buttton>)}</td>
                <td><button className="btn btn-primary">Editar</button></td>
                <td><button className="btn btn-danger">Eliminar</button></td>


            </tr>


    )
}

export default Tarea