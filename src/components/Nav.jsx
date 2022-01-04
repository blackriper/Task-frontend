import { useState } from 'react';
import {Navitem} from './NavItem';

export  function Nav() {
    const [active,setactive]=useState(false);

    return (
        <nav className="mt-5 text-sm font-medium">
          <ul className="flex space-x-3 justify-center">
           <Navitem to="/" isActive={active? false: true} handleActive={()=>setactive(false)}>Task list</Navitem>
           <Navitem to="/newtask" isActive={active} handleActive={()=>setactive(true)}> New task</Navitem>
          </ul>  
        </nav>
    )
}
