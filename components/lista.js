/*"use client"
import axios from 'axios'

async function loadTareas() {
  const { data } = await axios.get("http://localhost:3000/api/tareas")
  console.log(data)
  return data }

  export async function TareasList(){
    const tareas = await loadTareas()
    console.log(tareas)
    return <div>{tareas.map(tarea => {
  return <div key={tarea.id}>
    <h1>{tarea.tema}</h1>
    <h1>{tarea.subtema}</h1>
    <p>{tarea.description}</p>
    </div>
})}

</div>*/
  


}