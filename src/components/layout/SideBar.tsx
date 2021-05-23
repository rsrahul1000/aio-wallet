import logoLight from '../../assets/img/logo/logo_transparent_for_dark_bg.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export interface SideBarProps {
  toggleSidebar: string;
  handleToggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ toggleSidebar, handleToggleSidebar }: SideBarProps) => {
  const [isCollapsed, setiIsCollapsed] = useState({
    accounts: true,
    records: true,
  });

  return (
    // * Sidebar
    <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${toggleSidebar}`}>
      <Link className='sidebar-brand d-flex align-items-center justify-content-center' to='/'>
        <div className='sidebar-brand-icon align-content-center'>
          {/* <i className='fas fa-laugh-wink'></i> */}
          <img src={logoLight} className='img pl-1' alt='aio-wallet-logo' style={{ width: '120px' }} />
        </div>
        <div></div>
        {/* <div className='sidebar-brand-text mx-3'>AIO - Wallet</div> */}
      </Link>
      {/* Divider */}
      <hr className='sidebar-divider my-0' />

      {/* Nav Item - Dashboard */}
      <li className='nav-item active'>
        <Link className='nav-link' to='/dashboard'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* Divider */}
      <hr className='sidebar-divider' />

      {/* Heading */}
      <div className='sidebar-heading'>Interface</div>

      {/* Nav Item - Pages Collapse Menu */}
      <li className='nav-item'>
        <Link
          className={isCollapsed.accounts ? `nav-link collapsed` : `nav-link`}
          to='#'
          data-toggle='collapse'
          data-target='#collapseTwo'
          aria-expanded='true'
          aria-controls='collapseTwo'
          onClick={() => setiIsCollapsed({ ...isCollapsed, accounts: !isCollapsed.accounts })}
        >
          <i className='fas fa-fw fa-cog'></i>
          <span>Accounts</span>
        </Link>
        <div
          id='collapseTwo'
          className={isCollapsed.accounts ? `collapse` : `collapse show`}
          aria-labelledby='headingTwo'
          data-parent='#accordionSidebar'
        >
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Custom Components:</h6>
            <a className='collapse-item' href='buttons.html'>
              Buttons
            </a>
            <a className='collapse-item' href='cards.html'>
              Cards
            </a>
          </div>
        </div>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='records'>
          <i className='fas fa-fw fa-chart-area'></i>
          <span>Records</span>
        </Link>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='#'
          data-toggle='collapse'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'
        >
          <i className='fas fa-fw fa-wrench'></i>
          <span>Utilities</span>
        </a>
        <div id='collapseUtilities' className='collapse' aria-labelledby='headingUtilities' data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Custom Utilities:</h6>
            <a className='collapse-item' href='utilities-color.html'>
              Colors
            </a>
            <a className='collapse-item' href='utilities-border.html'>
              Borders
            </a>
            <a className='collapse-item' href='utilities-animation.html'>
              Animations
            </a>
            <a className='collapse-item' href='utilities-other.html'>
              Other
            </a>
          </div>
        </div>
      </li>

      {/* Divider */}
      <hr className='sidebar-divider' />

      {/* Heading */}
      <div className='sidebar-heading'>Addons</div>

      {/* Nav Item - Pages Collapse Menu */}
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='#'
          data-toggle='collapse'
          data-target='#collapsePages'
          aria-expanded='true'
          aria-controls='collapsePages'
        >
          <i className='fas fa-fw fa-folder'></i>
          <span>Pages</span>
        </a>
        <div id='collapsePages' className='collapse' aria-labelledby='headingPages' data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Login Screens:</h6>
            <a className='collapse-item' href='login.html'>
              Login
            </a>
            <a className='collapse-item' href='register.html'>
              Register
            </a>
            <a className='collapse-item' href='forgot-password.html'>
              Forgot Password
            </a>
            <div className='collapse-divider'></div>
            <h6 className='collapse-header'>Other Pages:</h6>
            <a className='collapse-item' href='404.html'>
              404 Page
            </a>
            <a className='collapse-item' href='blank.html'>
              Blank Page
            </a>
          </div>
        </div>
      </li>

      {/*  Nav Item - Charts  */}
      <li className='nav-item'>
        <a className='nav-link' href='charts.html'>
          <i className='fas fa-fw fa-chart-area'></i>
          <span>Charts</span>
        </a>
      </li>

      {/*  Nav Item - Tables  */}
      <li className='nav-item'>
        <a className='nav-link' href='tables.html'>
          <i className='fas fa-fw fa-table'></i>
          <span>Tables</span>
        </a>
      </li>

      {/*  Divider */}
      <hr className='sidebar-divider d-none d-md-block' />

      {/* Sidebar Toggler (Sidebar) */}
      <div className='text-center d-none d-md-inline'>
        <button className='rounded-circle border-0' id='sidebarToggle' onClick={handleToggleSidebar}></button>
      </div>

      {/* Sidebar Message */}
      <div className='sidebar-card'>
        <img className='sidebar-card-illustration mb-2' src='img/undraw_rocket.svg' alt='' />
        <p className='text-center mb-2'>
          <strong>SB Admin Pro</strong> is packed with premium features, components, and more!
        </p>
        <a className='btn btn-success btn-sm' href='https://startbootstrap.com/theme/sb-admin-pro'>
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
};

export default SideBar;
