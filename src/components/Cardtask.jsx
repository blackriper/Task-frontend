
export function Cardtask({task}) {
    return (
        <div className="card">
          <div className="px-5 py-4">
           <div className="flex items-center justify-between flex-wrap">
            <span  className="card-header"> {task.title} </span>
            <hr className="border-gray-200 my-1 border-bottom-none" style={{"borderTopWidth":0}}/>
            <div className="grid grid-cols-2 justify-center  space-x-4">
            <button className="btn-update">Update task</button>
            <button className="btn-delete">Delete task</button>
            </div>
           </div>
            <article className="text-gray-900 mt-2">
               {task.description}
            </article>
            <div className='flex text-gray-700 font-bold mt-2 '>
                <div>Created: <span className="text-purple-800 italic">{task.date_created}</span></div>
                <div className="ml-5">Leader Team: <span className="text-blue-800 italic">{task.leader}</span></div>
            </div>
      </div>   
        </div>
    )
}
