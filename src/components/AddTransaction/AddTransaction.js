import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import { DatePicker } from 'antd';
import Modal from '../UI/Modal/Modal'
import classes from './AddTransaction.module.scss'



const AddTransaction = ({addClick,handler}) => {
  const { addTransaction } = useContext(GlobalContext);

  const [transaction, setTransaction] = useState({
    transactionText: "",
    transactionAmount: 0,
    transactionCategory:"",
    transactionDate: ""
  });
  


  const { transactionText, transactionAmount, transactionCategory, transactionDate } = transaction;

  
  const onChangeTransaction = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onChangeDate = (momemt,date) => {
    setTransaction({ ...transaction, ['transactionDate']: date });
  };

  const modalClosed = () => {
    handler(false)
    setTransaction({
      transactionText: "",
      transactionAmount: 0,
      transactionCategory:"",
      transactionDate: ""
    });
  }

  const onSubmitTransaction = (e) => {
    e.preventDefault();

    if (transactionText !== "" &&  transactionCategory !== "" && transactionDate !== "") {
      const newTransaction = {
        id: uuidv4(),
        transactionText,
        transactionCategory,
        transactionDate,
        transactionAmount: transactionAmount * 1,
      };

      addTransaction(newTransaction);
      setTransaction({
        transactionText: "",
        transactionAmount: 0,
        transactionCategory:"",
        transactionDate: ""
      });
      handler(false)
    }
  };
  


  return (
      <Modal show={addClick} modalClosed={modalClosed} >
        <div>
          <form onSubmit={onSubmitTransaction}>
            <div className={classes.income}>
              <input
                className="m-2"
                type="text"
                name="transactionText"
                value={transactionText}
                placeholder="Add Note"
                autoComplete="off"
                onChange={onChangeTransaction}
              />
              <input
                className="m-2"
                type="number"
                name="transactionAmount"
                value={transactionAmount}
                placeholder="Add Amount"
                autoComplete="off"
                onChange={onChangeTransaction}
              />
              <select value={transactionCategory}  className="m-2" onChange={onChangeTransaction} name="transactionCategory" >
                <option value="" disabled>Add category</option>
                <option value="education">Education</option>
                <option value="shopping">Shopping</option>
                <option value="bill">Bills</option>
              </select>
              
              <DatePicker  className={`${classes.datePicker} m-2`} name='transactionAmount' onChange={onChangeDate}/>

              <input className="mt-3" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </Modal>
  );
};

export default AddTransaction;