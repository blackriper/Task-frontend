import React from 'react'

export function Newtask() {
    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="title"> New task</h1>
            </div>
            <div className="grid grid-rows-1 mt-5 justify-items-center">
               <form className=" w-4/5 sm:w-1/4">
                    <input className="textbox" autoFocus  type="text" placeholder="Write a title"/>
                    
                    <div className="mt-6 text-right">
                      <button className="btn">Add task</button> 
                    </div>
               </form>
            </div>
       </>
    )
}
