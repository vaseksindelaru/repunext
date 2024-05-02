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

    return(<div><h1 className='text-center font-mono text-3xl text-yelow text-yellow-600 font-bold  mb-8'>mis notas</h1>
      <div className="mx-12 grid gap-4 grid-cols-5">   
       
           {tarea.data[0].map((tarea)=>(
  <div key={tarea.id} className="bg-orange-500 p-4 rounded-lg border-gray-800 mb-2 text-center">
    <div className=" p-4 ">
    <p className='text-xl font-bold m-1 font-mono'>{tarea.tema}</p>
    <p className='text-base text-slate-600 m-1'>{tarea.subtema}</p>
    <p className='text-sm text-slate-300 m-1'>{tarea.subtema}</p>
   </div>
  </div>
 ))}
      </div></div>  )
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
