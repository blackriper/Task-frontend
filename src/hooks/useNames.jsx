import {useState,useEffect} from 'react'
import axios from 'axios';

export function useNames() {
    const[names,setnames]=useState([]);

    useEffect(() =>{
         getNamedata()    
    },[])
    
    const getNamedata=async()=>{
        const response= await axios.get('https://randomuser.me/api/?results=10&inc=name,login&nat=es');
         setnames(response.data.results);
     }
   return{
       names
   }
}
