import React, { useState } from 'react';
import classes from './SidebarList.module.scss';
import List from './List/List'

const SiderbarList = () => {
 
   const [data, setData] = useState([
       {  
            id : "1",
           image : "bill",
           heading: "Bills",

       },
       {
        id : "2",
        image : "education",
        heading: "Education",

       },
       {
        id : "3",
        image : "shopping",
        heading: "Shopping",
       }
   ]);


  return (
        <div className="pt-5 pb-4">
            <div className="d-flex justify-content-between mb-4">
                <h3>CATEGORIES</h3>
            </div>
            {
                data.map(obj => (
                     <List image={obj.image} heading={obj.heading} total={obj.total}></List>
                ))
            }
        </div> 
    );
}

export default SiderbarList;