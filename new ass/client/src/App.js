import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Index from './components/Index';
import Newform from './components/Newform';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/newform' element={<Newform/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
