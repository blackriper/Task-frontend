import {Routes,Route} from 'react-router-dom';
import {Nav} from './components/Nav';
import {Newtask} from './components/Newtask';
import {Tasklist} from './components/Tasklist';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';

export function App() {
  const queryClient = new QueryClient();

  return (
 <>
   <QueryClientProvider client={queryClient}>
    <Nav/>
    <Routes>
      <Route path="/"  element={<Tasklist/>}/>
      <Route path="/newtask"  element={<Newtask/>}/>
      <Route path="update/:idtask" element={<Newtask isUpdate />} />
    </Routes>
    <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
 </>
  );
}


