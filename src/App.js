import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from "./components/Start";
import LoginPage from './components/LoginPage';
import Feed from './components/Feed';
import Posting from './components/Posting';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route element={<Start />} path='/' exact />
          <Route element={<LoginPage />} path='/login' />
          <Route element={<Feed />} path='/feed' />
          <Route element={<Posting />} path='/post' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
