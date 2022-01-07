import { useState } from "react"
import { useTasks } from "../hooks/useTasks";

export function Cardtask({task,handleDelete}) {
   const [done,setdone]=useState(task.completed);
   const{upmutation}=useTasks();

   const handleChange=(id)=>{
     setdone(!done)
     upmutation.mutate(id)
   }

    return (
        <div className="card">
          <div className="px-5 py-4">
           <div className="flex items-center justify-between flex-wrap">
           {!done&&
            <input type="checkbox" className="form-check-label inline-block text-gray-800"  onChange={()=>handleChange(task.id)}/>
           }
            <span  className="card-header col-span-2"> {task.title} </span>
          
            <hr className="border-gray-200 my-1 border-bottom-none" style={{"borderTopWidth":0}}/>
            <div className="grid grid-cols-2 justify-center  space-x-4">
            <button className="btn-update">Update task</button>
            <button className="btn-delete" onClick={handleDelete}>Delete task</button>
            </div>
           </div>
            <article className="text-gray-900 mt-2">
               {task.description}
            </article>
            <div className='flex text-gray-700 font-bold mt-2 text-center '>
                <div>Created: <span className="text-purple-800 italic">{task.date_created}</span></div>
                <div className="ml-5">Leader Team: <span className="text-blue-800 italic">{task.leader}</span></div>
                <div className="ml-5">
                 Task status:
                  <span
                   className={done?"text-green-500 italic":"text-red-500 italic"}>
                   {done?' Done':' No done'}</span></div>
            </div>
      </div>   
        </div>
    )
}
