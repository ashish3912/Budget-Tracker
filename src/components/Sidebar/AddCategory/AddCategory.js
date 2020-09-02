import React,{useContext} from 'react';
import { GlobalContext } from "../../../context/GlobalState";


const AddCategory = () => {

  const { categories,transactions} = useContext(GlobalContext);
  console.log(categories);
  console.log(transactions);

  

   

    return(
      
      <div>Add Category</div>
        
        );
}

export default AddCategory;