import React , { useState, useContext, useEffect } from 'react';
import Stats from '../../components/Stats/Stats'
import Categories from '../../components/Categories/Categories'
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails'
import { GlobalContext } from "../../context/GlobalState";
import { compareValues } from '../../shared/utility';


const Overview = () => {
    const { transactions , details } = useContext(GlobalContext);
    const [ statsData, setStatsData ]  =   useState([]);
    const [ topExpenseData, setTopExpense] =  useState([]);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    useEffect( () => {

        const mapper = single => {
            let date = new Date(single.transactionDate);
            let p = Number(single.transactionAmount);
            return { year: date.getFullYear(),text:date.getMonth()  ,month: months[date.getMonth()], price: p };
          }
          
          const reducer = (group, current) => {
            let i = group.findIndex(single => (single.year === current.year && single.month === current.month));
            if (i == -1) {
              return [ ...group, current ];
            }
          
            group[i].price += current.price;
            return group;
          };

          const sumData = transactions.map(mapper).reduce(reducer, []);
          const sortedArray = transactions.sort(compareValues('transactionAmount'))
          setStatsData(sumData)
          setTopExpense(sortedArray)
       
   },[transactions])
   
   let section;
   if(details.income === null || details.limit === null || details.income === undefined || details.limit === undefined){
     section =  <PersonalDetails/>  
   }
   else {
     section =  <Stats  data={statsData} />
   }

    return (
        <React.Fragment>
          {
            section
          }
          {topExpenseData.length >=3 ? <Categories data={topExpenseData} /> : null}
        </React.Fragment>
    )
}

export default Overview;