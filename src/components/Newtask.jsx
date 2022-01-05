import{useNames} from '../hooks/useNames';

export function Newtask() {
    const {names}=useNames();

     return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="title"> New task</h1>
            </div>
            <div className="grid grid-rows-1 mt-5 justify-items-center">
               <form className=" w-4/5 sm:w-1/4">
                    <input className="textbox" autoFocus  type="text" placeholder="Write a title"/>
                    <select className="textbox mt-4">
                      {names.map((name=>
                         <option key={name.login.uuid}>{`${name.name.first} ${name.name.last}`}</option>
                        ))}
                    </select> 
                    <textarea 
                       rows="4"
                       cols="50"
                       className="textbox mt-4"
                       placeholder="Write description proyect">
                    </textarea>
                    <div className="mt-6 text-center">
                      <button className="btn">Add task</button> 
                    </div>
               </form>
            </div>
         </>
    )
}
