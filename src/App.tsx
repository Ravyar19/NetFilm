import Navbar from './components/navbar/Navbar.jsx';
import './index.css';
import Sidebar from './components/sidebar/Sidebar.jsx';
import MovieInformation from './components/MovieInformtaion/MovieInformation.jsx';
import Actors from './components/Actors/Actors.jsx';
import Movies from './components/Movies/Movies.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='font-mono flex'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Navbar />
        <main className='flex-1 p-4'>
          <Routes>
            <Route path='/movie/:id' element={<MovieInformation />} />
            <Route path='/actors/:id' element={<Actors />} />
            <Route path='/' element={<Movies />} />
            <Route path='/profile/:id' element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
