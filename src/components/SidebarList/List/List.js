import React from 'react';
import classes from './List.module.scss';

const list = (props) => (
    <div className="d-flex mb-4">
        <img className={classes['category-image']} src={require(`../../../assets/${props.image}.svg`)} alt="MyLogo" />
        <div className="d-flex flex-column">
             <h4 className="pl-4 m-0">{props.heading}</h4>
        </div>
    </div>
);

export default list;