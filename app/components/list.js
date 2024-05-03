


function List({tarea}){

     return(
<div className="bg-orange-500 hover:bg-gray-500 hover:cursor-pointer p-4 rounded-lg border-gray-800 mb-2 text-center">

  <p className='text-xl font-bold m-1 font-mono'>{tarea.tema}</p>
  <p className='text-base text-slate-600 m-1'>{tarea.subtema}</p>
  <p className='text-sm text-slate-300 m-1'>{tarea.descripcion}</p>

</div>
)
  
}
export default List


