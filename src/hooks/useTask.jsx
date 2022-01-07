import {useState,useEffect} from 'react'
import axios from 'axios';
import {useMutation,useQueryClient}from 'react-query';
import { updateTask } from '../services/task-api';


export  function useTask(idtask) {

    const[task,setTask]=useState({});
    const queryClient = useQueryClient();

    //find one task 
    useEffect(() =>{
       findTask(idtask) 
    },[idtask])

     const findTask= async(id) =>{
      if(id){ 
       const{data}=await axios.get(`http://localhost:5000/api/tasks/${id}`);
       setTask(data);
      }
   }
      const updatemut= useMutation((uptask,idtask)=>updateTask(uptask,idtask),{
           onSuccess: () => queryClient.invalidateQueries('taskData'),
      })

   return{
       task,
       updatemut
   }
 }
   
   

