import React,{useState} from 'react' 
import Proyecto from './Proyecto' 
import CrearProyecto from './CrearProyecto'


const MostrarProyectos = () => {
    const [data,setData] = useState([
       
        {nombre: 'Tienda virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de un sitio web'},
        {nombre: 'app inventario'},
        
    ])

    const nuevo = name => {
        if (name === ''){
            alert("Ingrese el nombre")
            return;
        }
        if (!data.find(i => i.nombre === name)){
            setData([...data, {nombre: name}])
        }else{
            alert("datos incorrectos")
        }
    }
    return (
        <div>
        <CrearProyecto N= {nuevo}/>
        <h3 className="text-light border-bottom fw-bold">Panel De Proyectos</h3>
        <div className= "List-group"> 
            {data.map(proyecto => (
              <Proyecto proyecto = {proyecto}/>
            
            ))}

            </div>
        </div>
        
    )
   
    
}

export default MostrarProyectos