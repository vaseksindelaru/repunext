//import axios from 'axios'
import {conn} from "../../db/mysql"
import List from "../components/list"
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
    <div>
      <h1 className='text-center font-mono text-3xl 
      text-yelow text-yellow-600 font-bold  mb-8'>
        mis notas</h1>
      <div className="mx-12 grid gap-4 grid-cols-5">   
       
           {tarea.data[0].map((tarea)=>(
           <List tarea={tarea} key={tarea.tarea_id}/>))}</div>
   </div> )
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
