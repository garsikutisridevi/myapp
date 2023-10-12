import logo from './logo.svg';
import './App.css';
import Slidebar from './Components/Slidebar';
import Content from './Components/Content';
import Shorts from './Components/Shorts';
import Home from './Components/Home';
import Hooks from './Components/Hooks';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { createContext ,useState} from 'react';
//import Context_expo from './Components/Context_expo';
import axios, { Axios } from 'axios';
// import Axiosdum from './Components/Axiosdum';
import { User } from './Components/Users';
import { Add } from './Components/Adduser';
export const store=createContext();
function App() {
  let Student=[
    {
      name:"sri",
      roll:"1230"
    },
    {
      name:"pallu",
      roll:"1013"
    },
    {
      name:"harika",
      roll:"1013"
    }
  ]
  const [data,setData]=useState(Student)
  return(
    <>
      <BrowserRouter>
      <store.Provider value={[data,setData]}>
      <div className='row'>
      <Slidebar/>
      {/*<Hooks/>
      <Context_expo/>
      <Axiosdum/>*/}
      <User/>
      <Add/>
      <Routes>
        {/*<Route path='/' element={<Home/>}></Route>
        <Route path='/Shorts' element={<Shorts/>}></Route>*/}
      </Routes>
      </div>
      </store.Provider>
      </BrowserRouter>
    </>
  );
  }
export default App;
