'use client'
import {useState} from "react"

const Page1 = () => {
  const [tarea,setTarea] = useState({tema:"",subtema:"",descripcion:""})
const handleChange = e => {
 // console.log(e.target.value, e.target.name)
  setTarea({ ...tarea,[e.target.name]:e.target.value})
}
const handleSubmit = (e) =>{e.preventDefault();
  console.log(tarea)

}
  return (
  <div>    
  <form onSubmit={handleSubmit} className="max-w-2xl bg-orange-600 rounded-lg border p-3 mx-auto mt-10">
  <p className="text-3xl text-center font-medium">Props</p>

  <div className="px-3 mb-3 mt-5">
      <textarea name="tema" placeholder="*tema" onChange={handleChange} className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
  </div>
  <div className="px-3 mb-2 mt-2">
      <textarea name="subtema" placeholder="*subtema" onChange={handleChange} className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
  </div>
  <div className="px-3 mb-10 mt-10">
      <textarea name="descripcion" placeholder="*descripcion" onChange={handleChange} className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-60 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
  </div>

  <div className="flex justify-end px-4">
      <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-blue-700 cursor-pointer" value="Guardar"/>
  </div>
</form>
</div>
  )
}

export default Page1
