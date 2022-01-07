import axios from 'axios';

export const getTasks=async ()=>{
   const{data}= await axios.get('http://localhost:5000/api/tasks');
   return data;
}

export const newTask=async(newtask)=>{
    const{data}= await axios.post('http://localhost:5000/api/newtask',newtask);
    return data
}

export const deleteTask= async(id)=>{
    const{data}=axios.delete(`http://localhost:5000/api/tasks/${id}`);
    return data;
}

export const completedTask= async(id)=>{
    const{data}=axios.put(`http://localhost:5000/api/task/completed/${id}`,{"completed":true});
    return data;
}