import {useState,useEffect} from 'react'
import axios from 'axios';


export  function useTask(idtask) {

    const[task,setTask]=useState({});
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
   return{
       task
   }
 }
   
   

