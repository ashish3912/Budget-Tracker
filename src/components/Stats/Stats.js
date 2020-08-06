import React, { useContext }  from 'react';
import classes from './Stats.module.scss';
import Barchart from './Barchart/Barchart'
import Circle from './Circle/Circle'
import Number from './Numbers/Number'
import { GlobalContext } from "../../context/GlobalState";

const Stats = (props) => {
    const { transactions, details } = useContext(GlobalContext);
    const totalExpenses = transactions
    .reduce((acc, transaction) => (acc += transaction.transactionAmount), 0)
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentMonthExpenses = getCurrentMonthExpenses()



    function getCurrentMonthExpenses () {
        const currentMonthData = props.data.find(transaction => transaction.text === currentMonth)
        if(currentMonthData && currentMonthData.price) {
            return currentMonthData.price
        }
        else{
            return 0;
        }
    }
    
    
    const percentage = (currentMonthExpenses/details.limit)*100

   
   return (
    <div className={ `${classes.stats} d-flex shadow`}>
        <div className={ `${classes.barContainer} p-3`}>
            <div class="d-flex justify-content-center">
                <Number amount={totalExpenses} text="Total Expenses" color="red"/>
                <Number amount={details.income} text="Monthly Income"  color="lightBlue" />     
            </div>
            <div class="d-flex justify-content-center">   
               { props.data.length ? <Barchart data={props.data}/> : <div> No Transactions Found</div> }
            </div>
        </div>
        <div className={ `${classes.circleContainer} p-3`}>
             <h3>Budget</h3>
             <Circle
             trailStrokeColor = "grey"
             strokeColor = "pink"
             percentage = {percentage}
             text = {currentMonthExpenses}
             />
             <div class="d-flex justify-content-between">
                <div>
                    <h3>{details.limit}</h3>
                    <p>Monthly Limit</p>
                </div>
                <div>
                    <h3>{details.limit - currentMonthExpenses}</h3>
                    <p>Balance</p>
                </div>
             </div>
         </div>
    </div>
)
}

export default Stats;