import React from 'react';
import{Cardtask} from './Cardtask';
import {useTasks} from '../hooks/useTasks';
import {Loading} from './Loading';
import {Errormessage} from './Errormessage';

export function Tasklist() {
    const {isLoading,error, data}=useTasks();

    if (isLoading) return <Loading/>
 
    if (error) return <Errormessage error={error}/>
    
   
    return (
        <>
           <div className="flex justify-center mt-10">
              <h1 className="title"> Developer task list</h1>
           </div>  
           <div className="grid grid-rows-2 justify-items-center mt-6">
            {data.map((task) =>
                    <Cardtask task={task} key={task.id}/>
                )}
           </div>
        </>
    )
}
