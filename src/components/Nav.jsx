import {Navitem} from './NavItem';

export  function Nav() {
  

    return (
        <nav className="mt-5 text-sm font-medium">
          <ul className="flex space-x-3 justify-center">
           <Navitem to="/">Task list</Navitem>
           <Navitem to="/newtask"> New task</Navitem>
          </ul>  
        </nav>
    )
}
