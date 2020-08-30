import React, { useState , useContext, useEffect } from 'react';
import Transaction from '../../components/Transaction/Transaction'
import AddTransaction from '../../components/AddTransaction/AddTransaction'
import { GlobalContext } from "../../context/GlobalState";
import classes from './Finance.module.scss';
import { compareValues } from '../../shared/utility';
import {Popover, Button,Select} from 'antd';

const Finance = () =>  {
    const { transactions,details } = useContext(GlobalContext);
    const [ filteredTransactions, setFilteredTranscations ]  =   useState(transactions);
    const [ search, setSearch ] = useState("");
    const [ sort, setSort ] = useState("");
    const [ addTransaction, setAddTransaction ] = useState(false);

  
   useEffect( () => {
        setFilteredTranscations(transactions.filter( transaction => {
            return  transaction.transactionAmount.toString().includes(search) ||
                    transaction.transactionText.includes(search)
        }))
   },[search,transactions])
   
   useEffect( () => {
    transactions.sort(compareValues(sort))
    setFilteredTranscations([...transactions])
   },[sort,transactions])

  
    const totalAmount=transactions.reduce( function(cnt,o){ return cnt + o.transactionAmount; }, 0);

    
    const content=(
        <div> 
            <p>Limit: ₹{details.limit}</p>
            <p>Total Spent: ₹{totalAmount}</p>
            <p> Balance Left: ₹{details.limit-totalAmount}</p>
        </div>
     );

    const { Option } = Select;

    function handleChange(value) {
        setSort(value);
        }

    const Transactions = filteredTransactions.length ? filteredTransactions.map(transaction => (
        <Transaction 
            key={transaction.id}
            id={transaction.id}
            category={transaction.transactionCategory} 
            heading={transaction.transactionText} 
            total={transaction.transactionAmount} 
            date={transaction.transactionDate.toString()}
        />
   )) :  <div className={classes.transaction}>
                 No Transaction Found
         </div>


    return (
     
        <React.Fragment>     
            <div className="mb-4">  
                <input
                className={classes.searchBar}
                placeholder="Type to search..."
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            </div>
            <div className="d-flex justify-content-between"> 
                <Button ghost type="primary" onClick={ ()=> setAddTransaction(true) }>Add transaction</Button>
                <Popover
                        trigger="hover"
                        title="Balance Details"
                        content={content}
                >
                    <Button type="primary" ghost>Balance Left : ₹{details.limit-totalAmount}</Button>
                </Popover >
                {/* <div>
                    <Button type="primary" ghost   onClick={()=> setSort('transactionDate')}>Date</Button>
                    </div> */}
                    <div>
                    <Select className={classes.customSelect} defaultValue="Sort by" style={{ width: 120 }} onChange={handleChange} >
                        
                    <Option value="transactionName">Name</Option>
                        <Option value="transactionDate">Date</Option>
                        <Option value="transactionAmount">Amount</Option>
                        <Option value="transactionCategory">Category</Option>
                    </Select>
                </div>
            </div>
            <div className="mt-4">
                {Transactions}
            </div> 
            <AddTransaction addClick={addTransaction} handler={setAddTransaction} />
        </React.Fragment>
    )
}

export default Finance;