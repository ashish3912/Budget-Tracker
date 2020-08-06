import React from 'react';

import LogoImage from '../../assets/bill.svg';
import classes from './Logo.module.scss';

const logo = () => (
    <div className={`${classes.Logo} d-flex align-items-center`} >
        <img src={LogoImage} alt="MyLogo" />
        <h2 className="pl-3"> Budget</h2>
    </div>
);

export default logo;