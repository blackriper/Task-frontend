import {Link} from 'react-router-dom';

export  function Navitem({to,children,isActive,handleActive}) {
    return (
        <li>
          <Link
           to={to}
           className={`block px-3 py-2 rounded-md ${isActive ? 'bg-sky-500 text-white' : 'bg-gray-200'}`}
           onClick={handleActive}
           >
           {children}
           </Link>  
        </li>
    )
}
