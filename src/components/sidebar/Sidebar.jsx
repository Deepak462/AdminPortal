import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className="logo">Admin</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
                <PersonOutlineIcon className='icon'/>
                <span>Users</span>
            </li>
            <li>
                <ProductionQuantityLimitsIcon className='icon'/>
                <span>Products</span>
            </li>
            <li>
                <InventoryIcon className='icon'/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingIcon className='icon'/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <AssessmentIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNoneIcon className='icon'/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <SettingsSuggestIcon className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                <DisplaySettingsIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsIcon className='icon'/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountBoxIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
