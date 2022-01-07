import {useQuery,useMutation,useQueryClient} from 'react-query';
import { 
    getTasks,
    newTask,
    deleteTask,
    completedTask} from '../services/task-api';

export function useTasks() {

    const queryClient = useQueryClient()
    //get all task
    const {isLoading,error, data}=useQuery('taskData',getTasks);
    //add new task
    const addmutation=useMutation(newtask=>newTask(newtask),{
      onSuccess: () => queryClient.invalidateQueries('taskData'),
    });

    //delete one task
    const delmutation=useMutation(idtask=>deleteTask(idtask),{
       onSuccess: () => queryClient.invalidateQueries('taskData'),
    });

    //update state the task
    const upmutation=useMutation((idtask)=>completedTask(idtask));

       

      return {
         isLoading,
         error,
         data,
         addmutation,
         delmutation,
         upmutation,
       }
}
