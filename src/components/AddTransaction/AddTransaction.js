import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import { DatePicker,message,Modal } from 'antd';
import classes from './AddTransaction.module.scss'


 
const AddTransaction = ({addClick,handler}) => {
  const { addTransaction,transactions,details } = useContext(GlobalContext);

  const [transaction, setTransaction] = useState({
    transactionText: "",
    transactionAmount: "",
    transactionCategory:"",
    transactionDate: ""
  });
  
  const totalAmount=transactions.reduce( function(cnt,o){ return cnt + o.transactionAmount; }, 0);


  const { transactionText, transactionAmount, transactionCategory, transactionDate } = transaction;

  
  const onChangeTransaction = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onChangeDate = (momemt,date) => {
    setTransaction({ ...transaction, 'transactionDate': date });
  };  

  const modalClosed = () => {
    handler(false)
    setTransaction({
      transactionText: "",
      transactionAmount: "",
      transactionCategory:"",
      transactionDate: ""
    });
  }

  const onSubmitTransaction = (e) => {
    e.preventDefault();
    

    if (transactionText !== "" &&  transactionCategory !== "" && transactionDate !== "" && transactionAmount!=="" && details.limit>0) {
      if(parseInt(details.limit)<(parseInt(totalAmount)+parseInt(transactionAmount)))
      {
        console.log(details.limit +" "+totalAmount+" "+transactionAmount)
        
        message.error("You have crossed your monthly limit, Please increase your limit to add transactions.")
        handler(false)
      }
      else{
            const newTransaction = {
              id: uuidv4(),
              transactionText,
              transactionCategory,
              transactionDate,
              transactionAmount: transactionAmount * 1,
            };
            console.log(newTransaction);

            addTransaction(newTransaction);
            setTransaction({
              transactionText: "",
              transactionAmount: "",
              transactionCategory:"",
              transactionDate: ""
            });
            handler(false)
          }
    }
    else if(transactionText === "" ||  transactionCategory === "" || transactionDate === "" || transactionAmount===""){
      message.error("Please fill all the fields to create a Transaction.")
      }
      else
      {
        message.error("Please fill the details in the Details section to start creating Transactions")
        handler(false)
      }
  };
  


  return (
       <Modal className={classes.customModal} visible={addClick} onOk={onSubmitTransaction} onCancel={modalClosed} modalClosed={modalClosed}>
        <div>
          <form onSubmit={onSubmitTransaction}>
            <h1 className={classes.headerText}> Add Transaction</h1>
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

              {/* <input className="mt-3" type="submit" value="Submit" /> */}
            </div>
          </form>
        </div>
      </Modal>
  );
};

export default AddTransaction;