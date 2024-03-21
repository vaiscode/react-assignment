import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Employeeform from './components/Employeeform';
import Home from './components/Home';

function App() {
  return (
    <div>
      <div>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/add'} element={<Employeeform/>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;

