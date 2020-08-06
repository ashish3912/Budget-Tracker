import React from 'react';
import Category from './Category/Category'
import classes from  './Categories.module.scss'

const categories = (props) => {
      
    const expenses = props.data.slice(-3).map(i => {
        return <Category  category={i.transactionCategory} amount={i.transactionAmount}    key={i.id}/>
    })

   return ( 
        <div className="mt-5">
        <h2>Biggest Expenses</h2>
        <div className={`${classes.container} mt-4`}>
                {expenses}
        </div>
        
    </div>
    )
}

export default categories;