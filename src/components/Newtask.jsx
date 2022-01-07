import{useNames} from '../hooks/useNames';
import {useTasks}from '../hooks/useTasks';
import{Addnot}from '../components/Addnot';
import {useForm}from 'react-hook-form';
import { DateTime } from "luxon";
import { formatDate } from '../services/methods';

export function Newtask() {

    const {names}=useNames();
    const{addmutation}=useTasks();
    const {register,formState:{errors},handleSubmit,reset}=useForm();

    const createTask= (data)=>{
       let date_created= formatDate(DateTime.now());
       addmutation.mutate({date_created,...data});
       reset();
     }


     return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="title"> New task</h1>
            </div>
            <div className="grid grid-rows-1 mt-5 justify-items-center">
               <form className=" w-4/5 sm:w-1/4" onSubmit={handleSubmit(createTask)}>
                    <input
                     className={errors.title?"textbox-error":"textbox"}
                     autoFocus 
                     type="text"
                     placeholder="Write a title"
                     {...register("title",{required:true})}/>
                     { errors.title&& <p className="text-red-500 font-medium mt-2">Title is required</p>}

                    <select className="textbox mt-4" {...register("leader",{required:true})}>
                      {names.map((name=>
                         <option key={name.login.uuid}>{`${name.name.first} ${name.name.last}`}</option>
                        ))}
                    </select> 

                    <textarea 
                       rows="4"
                       cols="50"
                       className={errors.description?"textbox-error mt-4":"textbox mt-4"}
                       placeholder="Write description proyect"
                       {...register("description",{required:true})}>
                    </textarea>
                    { errors.description&& <p className="text-red-500 font-medium mt-2">Description is required</p>}

                    <div className="mt-6 text-center">
                      <button className="btn">Add task</button> 
                    </div>
                    <Addnot mutation={addmutation}/>
               </form>
             </div>
         </>
    )
}
