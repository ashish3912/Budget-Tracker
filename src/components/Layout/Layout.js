import React, { useState }from 'react';
import Toolbar from '../Toolbar/Toolbar'
import Sidebar from '../Sidebar/Sidebar'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './Layout.module.scss';


const Layout = (props) => {
    const [isSidebarOpen, setSidebar] = useState(false);
 
    const toggleSidebar = () => {
        if(window.innerWidth <= 1200) {
            document.getElementById('sidebar').classList.toggle('open')
            setSidebar(!isSidebarOpen)
        }      
    } 

    return (
        <React.Fragment>
            <main className={classes.main}>
                <Toolbar sidebarOpen={isSidebarOpen} openSidebar={toggleSidebar}/>
                {props.children}
            </main>
            <Sidebar/>
            <Backdrop show={isSidebarOpen} clicked={toggleSidebar} />
        </React.Fragment>
    )

}

export default Layout;