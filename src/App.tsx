import './App.css';
import React, { useState } from 'react';
import NavBar from './components/layout/NavBar';
import SideBar from './components/layout/SideBar';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecordsPage } from './components/records/RecordsPage';

// import './assets/js/aio-wallet';

const App: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState('');

  const handleToggleSidebar = () => {
    const toggled = toggleSidebar === 'toggled' ? '' : 'toggled';
    setToggleSidebar(toggled);
  };

  return (
    <BrowserRouter>
      <div className='wrapper d-flex'>
        <SideBar toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar} />
        <div id='content-wrapper' className='d-flex flex-column' style={{ width: '100%' }}>
          {/* <!-- Main Content --> */}
          <div id='content'>
            {/* Top bar */}
            <NavBar handleToggleSidebar={handleToggleSidebar} />
            {/* <!-- Begin Page Content --> */}
            {/* Begin Page Content */}
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/records' component={RecordsPage} />
            </Switch>

            {/* End Page Content */}
            <div className='container-fluid'></div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
