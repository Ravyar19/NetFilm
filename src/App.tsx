import Navbar from './components/navbar/Navbar.jsx';
import './index.css';
import Sidebar from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <div className='font-mono flex'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Navbar />
        <main className='flex-1 p-4'>
          <h1>Main content goes here</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
