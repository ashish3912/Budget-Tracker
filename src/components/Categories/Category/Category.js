import React from 'react';

import classes from  './Category.module.scss'

const category = (props) => (
    <React.Fragment>
        <div className = {`${classes.Category} shadow`}>
            <div>
                 <img width="50px" src={require(`../../../assets/${props.category}.svg`)} alt="MyLogo" />
            </div> 
            <div className="mt-3">
                {props.category}
            </div>
            <div>
                {props.amount}
            </div>         
        </div>
    </React.Fragment>
)

export default category;