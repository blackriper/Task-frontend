import{Cardtask} from './Cardtask';
import {useTasks} from '../hooks/useTasks';
import {Loading} from './Loading';
import {Errormessage} from './Errormessage';
import {useNavigate} from 'react-router-dom';

export function Tasklist() {
    const {isLoading,error, data:tasks,delmutation}=useTasks();
    let navigate = useNavigate();
  
    const deleteOne= (id) =>{
        if (window.confirm("Do you really want to delete task?")) {  
           delmutation.mutate(id); 
                   
        }
      }
    const updateOne=(id)=>{
         navigate(`update/${id}`);
    }  

    if (isLoading) return <Loading text="Loading task..."/>
 
    if (error) return <Errormessage error={error}/>

     
   
    return (
        <>
           <div className="flex justify-center mt-10">
              <h1 className="title"> Developer task list</h1>
           </div>  
           <div className="grid grid-rows-2 justify-items-center mt-6">
            {tasks.map((task) =>
                    <Cardtask task={task} key={task.id} handleDelete={()=>deleteOne(task.id)} handleUpdate={()=>updateOne(task.id)}/>
                )}
           </div>
           {delmutation.isSuccess?<p className="text-green-500 text-lg text-center">Task delete sucesfully</p>:''}
        </>
    )
}
