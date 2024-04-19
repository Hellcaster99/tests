import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Data from './components/Data';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/data' element={<Data/>}/>
      </Routes>
    </>
  )
}

export default App
