import React from 'react';
import classes from  './Toolbar.module.scss'
import Logo from  '../Logo/Logo'
import { NavLink } from "react-router-dom";
import Menu from '../../assets/open-menu.svg';
import MediaQuery from 'react-responsive'

const header = (props) => {
    return (
        <header className={`${classes.header} d-flex align-items-center justify-content-between`}>
                <Logo />
                <div className="d-flex justify-content-end">
                    <nav>
                        <ul className={`${classes.list} d-flex justify-content-end list`}>
                            <li>
                                <NavLink  to="/" exact="true" activeClassName={classes.active}>Overview</NavLink>
                            </li>
                            <li>
                                <NavLink to="/finance" exact="true" activeClassName={classes.active}>Finance</NavLink>
                            </li>
                            <li>
                                <NavLink to="/details" exact="true" activeClassName={classes.active}>Details</NavLink>
                            </li>
                            <MediaQuery query="(max-width: 1200px)">
                                <li>
                                  <img onClick={props.openSidebar} height="30" src={Menu} alt="MyLogo" />
                                </li>
                            </MediaQuery>    
                        </ul>
                    </nav>
                      
                </div>
              
        </header>
    )
}

export default header;