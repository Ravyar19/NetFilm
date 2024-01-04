import Navbar from './components/navbar/Navbar.jsx';
import './index.css';
import Sidebar from './components/sidebar/Sidebar.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      if (isSidebarOpen && window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='font-mono flex'>
      {!isSmallScreen && (
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <div
        className={`flex flex-col flex-1 ${
          isSmallScreen ? 'w-full' : 'lg:flex'
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className={`ml-${isSmallScreen ? '0' : '10'} flex-1 p-4`}>
          <h1>Main content goes here</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
