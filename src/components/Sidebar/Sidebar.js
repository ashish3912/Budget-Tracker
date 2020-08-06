import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import SidebarList from '../SidebarList/SidebarList'
import classes from './Sidebar.module.scss';

const sidebar = () => (
    <div id="sidebar" className={classes.sidebar} >
       <div className="d-flex align-items-center justify-content-between">
          <h3>DARK MODE</h3> 
          <ThemeToggle/> 
        </div>
       <SidebarList/>
    </div>
);

export default sidebar;