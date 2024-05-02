//import axios from 'axios'
import {conn} from "../../db/mysql"

  async function loadTareas() {
  //const {data} = await axios.get("http://localhost:3000/api/tareas")
  //return {data} 
const data = await conn.query("SELECT * FROM notas")
console.log(data)
}

  async function TareasList(){
loadTareas()

    return(
      <div className="text-white">   
           <p>hola</p>
    
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
