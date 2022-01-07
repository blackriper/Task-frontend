import { useNames } from '../hooks/useNames';
import { useTasks } from '../hooks/useTasks';
import { useTask } from '../hooks/useTask';
import { Addnot } from '../components/Addnot';
import { useForm } from 'react-hook-form';
import { DateTime } from "luxon";
import { formatDate } from '../services/methods';
import { useParams } from 'react-router-dom';


export function Newtask({isUpdate}) {

  const { names } = useNames();
  const { addmutation } = useTasks();
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { idtask } = useParams();
  const { task } = useTask(idtask);

  

  const createTask = (data) => {
    if (idtask) {


    } else {
      let date_created = formatDate(DateTime.now());
      addmutation.mutate({ date_created, ...data });
      reset();
    }
  }


  return (
    <>
      <div className="flex justify-center mt-10">
        <h1 className="title"> {isUpdate?'Update task':'New task'}</h1>
      </div>
      <div className="grid grid-rows-1 mt-5 justify-items-center">
        <form className=" w-4/5 sm:w-1/4" onSubmit={handleSubmit(createTask)}>
          <input
            className={errors.title ? "textbox-error" : "textbox"}
            autoFocus
            type="text"
            placeholder="Write a title"
            defaultValue={task.title}
            {...register("title", { required: true })} />
          {errors.title && <p className="text-red-500 font-medium mt-2">Title is required</p>}
          {isUpdate ? (
            <>
              <input
                className={errors.leader ? "textbox-error mt-4" : "textbox mt-4"}
                autoFocus
                type="text"
                placeholder="Write a leader team"
                defaultValue={task.leader}
                {...register("leader", { required: true })} />
              {errors.leader && <p className="text-red-500 font-medium mt-2">Leader name is required</p>}
            </>
          ) : (
            <>
              <select className="textbox mt-4" {...register("leader", { required: true })}>
                {names.map((name =>
                  <option key={name.login.uuid}>{`${name.name.first} ${name.name.last}`}</option>
                ))}
              </select>
            </>
          )}
          <textarea
            rows="4"
            cols="50"
            className={errors.description ? "textbox-error mt-4" : "textbox mt-4"}
            placeholder="Write description proyect"
            defaultValue={task.description}
            {...register("description", { required: true })}>
          </textarea>
          {errors.description && <p className="text-red-500 font-medium mt-2">Description is required</p>}

          <div className="mt-6 text-center">
            <button className="btn">{isUpdate?'Update task':'Add task'}</button>
          </div>
          <Addnot mutation={addmutation} />
        </form>
      </div>
    </>
  )
}
