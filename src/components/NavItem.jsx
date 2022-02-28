import {NavLink} from 'react-router-dom';

export  function Navitem({to,children}) {
    return (
        <li>
          <NavLink
           to={to}
           className={({isActive})=> isActive ? 'block px-3 py-2 rounded-md bg-sky-500 text-white' : 'block px-3 py-2 rounded-md bg-gray-200'}
            >
           {children}
           </NavLink>  
        </li>
    )
}
