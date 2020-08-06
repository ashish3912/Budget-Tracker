import React, { useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import classes from  './Transaction.module.scss'

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return(<div className={`${classes.transaction} d-flex justify-content-between shadow`}>
            <div className="d-flex align-items-center">
              <img src={require(`../../assets/${props.category}.svg`)} className={classes['category-image']} alt="MyLogo" />
              <div className="d-flex flex-column">
                  <h4 class="pl-4 m-0">{props.heading}</h4>
                  <p class="pl-4 m-0">{props.date}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span>{props.total}</span>
              <button className={`${classes.deleteButton} ml-4`} onClick={ () => deleteTransaction(props.id)}>&#x2715; </button>
            </div>
        </div>
      )
}

export default Transaction;