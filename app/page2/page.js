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
      <div className="grid gap-4 grid-cols-5">   
       
           {tarea.data[0].map((tarea)=>(
  <div key={tarea.id} className="bg-white rounded-lg border-gray-800 mb-3 text-center ">
    <p className='text-xl font-bold m-1'>{tarea.tema}</p>
    <p className='text-lg text-slate-600'>{tarea.subtema}</p>
    <p className='text-base text-slate-300'>{tarea.subtema}</p>
   
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
