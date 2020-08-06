import React from 'react';
import classes from './Number.module.scss';
import Ruppee from '../../../assets/rupee.svg';


const number = (props) => (
    <div className="d-flex flex-column p-3">
        <div className={ `${classes['icon-container']} shadow`}>
            <img width="20" src={Ruppee} alt="MyLogo" />
        </div>
        <div class="mt-3 mb-3">
             {props.amount}
        </div>
        <div style={{color: props.color}} >
             {props.text}
        </div>
    </div>
)

export default number;