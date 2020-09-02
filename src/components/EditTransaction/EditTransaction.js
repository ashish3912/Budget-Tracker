import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { DatePicker} from 'antd';
import classes from '../AddTransaction/AddTransaction.module.scss';
import { message,Modal } from 'antd';
import moment from 'moment';



const EditTransaction = ({handler,props,addClick}) => {

  const { details,transactions,editTransaction} = useContext(GlobalContext);

  const [transaction, setTransaction] =  useState({
    transactionText:props.heading,
    transactionAmount: props.total,
    transactionCategory:props.category,
    transactionDate: props.date.toString()
  });

  const { transactionText, transactionAmount, transactionCategory, transactionDate } = transaction;

  
  const onChangeTransaction = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onChangeDate = (momemt,date) => {
    setTransaction({ ...transaction, 'transactionDate': date });
  };

  const modalClosed = () => {
    handler(false)
    
  }

  const totalAmount=transactions.reduce( function(cnt,o){ return cnt + o.transactionAmount; }, 0);


  const onSubmitTransaction = (e) => {
    e.preventDefault();
    

    if (transactionText !== "" &&  transactionCategory !== "" && transactionDate !== "" && transactionAmount!=="" ) {
      console.log(transactionAmount)
      const newTransaction = {
        id: props.id,
        transactionText,
        transactionCategory,
        transactionDate,
        transactionAmount: transactionAmount * 1
      };
      console.log(newTransaction);

      
      editTransaction(newTransaction);
      handler(false)
    }
    else if(transactionText === "" ||  transactionCategory === "" || transactionDate === "" || transactionAmount===""){
      message.error("Please fill all the fields to create a Transaction.")
      }
      else{
        message.error("You can only add "+parseInt(details.limit-totalAmount)+" in this transaction.Please increase your limit.")
      }
  };
  


  return (
      <Modal className={classes.Modal} visible={addClick} onOk={onSubmitTransaction} onCancel={modalClosed} modalClosed={modalClosed}>
        <div>
          <form onSubmit={onSubmitTransaction}>
            <h1 className={classes.headerText}> Edit Transaction</h1>
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
              
              <DatePicker  className={`${classes.datePicker} m-2`} value={moment(transactionDate)} name='transactionAmount' onChange={onChangeDate}/>

              {/* <input className="mt-3" type="submit" value="Submit" /> */}
            </div>
          </form>
        </div>
      </Modal>
  );
};

export default EditTransaction;