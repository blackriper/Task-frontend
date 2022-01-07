import React from 'react';
import{Cardtask} from './Cardtask';
import {useTasks} from '../hooks/useTasks';
import {Loading} from './Loading';
import {Errormessage} from './Errormessage';

export function Tasklist() {
    const {isLoading,error, data,delmutation}=useTasks();

    const deleteOne= (id) =>{
        if (window.confirm("Do you really want to delete task?")) {  
           delmutation.mutate(id); 
          
        }
      }

    if (isLoading) return <Loading text="Loading task..."/>
 
    if (error) return <Errormessage error={error}/>

  
   
    
   
    return (
        <>
           <div className="flex justify-center mt-10">
              <h1 className="title"> Developer task list</h1>
           </div>  
           <div className="grid grid-rows-2 justify-items-center mt-6">
            {data.map((task) =>
                    <Cardtask task={task} key={task.id} handleDelete={()=>deleteOne(task.id)}/>
                )}
           </div>
           {delmutation.isSuccess?<p className="text-green-500 text-lg text-center">Task delete sucesfully</p>:''}
        </>
    )
}
