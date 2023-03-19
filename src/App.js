import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
