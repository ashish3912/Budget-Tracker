import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import SidebarList from '../SidebarList/SidebarList'
import classes from './Sidebar.module.scss';
import AddCategory from './AddCategory/AddCategory'

const sidebar = () => (
    <div id="sidebar" className={classes.sidebar} >
       <div className="d-flex align-items-center justify-content-between">
          <h3>DARK MODE</h3> 
          <ThemeToggle/> 
        </div>
       <SidebarList/>
       {/* <AddCategory/> */}
    </div>
);

export default sidebar;