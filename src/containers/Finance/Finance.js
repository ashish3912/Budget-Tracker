import React, { useState , useContext, useEffect } from 'react';
import Transaction from '../../components/Transaction/Transaction'
import AddTransaction from '../../components/AddTransaction/AddTransaction'
import { GlobalContext } from "../../context/GlobalState";
import classes from './Finance.module.scss';
import { compareValues } from '../../shared/utility';



const Finance = () =>  {
    const { transactions } = useContext(GlobalContext);
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
                <button className={classes.sortButton} onClick={ ()=> setAddTransaction(true) }>Add transaction</button>
                <div>
                    <button className={classes.sortButton}  onClick={()=> setSort('transactionAmount')}>Amount</button>
                    <button className={classes.sortButton} onClick={()=> setSort('transactionText')}>Name</button>
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