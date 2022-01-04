import {Routes,Route} from 'react-router-dom';
import {Nav} from './components/Nav';
import {Newtask} from './components/Newtask';
import './App.css';

export function App() {
  return (
 <>
  <Nav/>
  <Routes>
    <Route path="/"  element={<h1>Listtask</h1>}/>
    <Route path="/newtask"  element={<Newtask/>}/>
  </Routes>
 </>
  );
}


