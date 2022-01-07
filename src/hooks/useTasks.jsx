import {useQuery,useMutation} from 'react-query';
import { getTasks,newTask,deleteTask,completedTask } from '../services/task-api';

export function useTasks() {

    //get all task
    const {isLoading,error, data}=useQuery('taskData',getTasks,{
        notifyOnChangeProps: ['data', 'error'],
    });
    //add new task
    const addmutation=useMutation(newtask=>newTask(newtask));

    //delete one task
    const delmutation=useMutation(idtask=>deleteTask(idtask));

    const upmutation=useMutation((idtask)=>completedTask(idtask));

     

      return {
         isLoading,
         error,
         data,
         addmutation,
         delmutation,
         upmutation         
     }
}
