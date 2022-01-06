import {useQuery,useMutation} from 'react-query';
import axios from 'axios';

export function useTasks() {

    const {isLoading,error, data}=useQuery('taskData',() =>
          axios.get('http://localhost:5000/api/tasks').then((response) =>response.data)
     )

     const mutation=useMutation(newtask=>{
         return axios.post('http://localhost:5000/api/newtask',newtask)
     })

     return {
         isLoading,
         error,
         data,
         mutation
     }
}
