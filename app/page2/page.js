//import axios from 'axios'
import {conn} from "../../db/mysql"

  async function loadTareas() {
  //const {data} = await axios.get("http://localhost:3000/api/tareas")
  //return {data} 
const data = await conn.query("SELECT * FROM notas")
return {data} 
}

  async function TareasList(){
    const tarea = await loadTareas()
    console.log(tarea)

    return(
      <div className="text-white">   
           <p>hola</p>
           {tarea.data[0].map((tarea)=>(
  <div key={tarea.id}>
    
    <p>{tarea.tema}</p>
   
  </div>
 ))}
      </div>  )
  }
export default TareasList

/*

const tarea = await loadTareas()
console.log(tarea)


{tarea.data.map((tarea,index)=>(
  <div key={index}>
    
    <p>{tarea.subtema}</p>
   
  </div>
 ))}*/
