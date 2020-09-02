import React, { useContext ,useState} from 'react';
import { GlobalContext } from "../../context/GlobalState";
import classes from  './Transaction.module.scss'
import EditTransaction from '../EditTransaction/EditTransaction';




const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const[ editTransition,setEditTransaction] = useState(false);
  
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
              <button className={`${classes.editButton}  ml-4`}onClick={()=> setEditTransaction(true)}><img src={require(`../../assets/edit.svg`)}  alt="edit" /></button>
              <button className={`${classes.deleteButton} ml-4`} onClick={ () => deleteTransaction(props.id)}>&#x2715; </button>
            </div>
            <EditTransaction addClick={editTransition}  handler={setEditTransaction} props={props} />
        </div>
        
        
      )
}

export default Transaction;