import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import classes from './PersonalDetails.module.scss';

const AddDetails = () => {

  const { details, updateDetails } = useContext(GlobalContext);
  const [ newDetails, setDetails ] = useState({
    income: details.income,
    limit : details.limit,

  });

  const onChangeDetails = (e) => {
    setDetails({ ...newDetails, [e.target.name]: e.target.value });
    console.log(newDetails)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateDetails(newDetails);   
  };

  return (
    <div className={`${classes.container} shadow`}>
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-column">
        <label className="m-2">
           Monthy Limit:
          <input
            type="number"
            value={newDetails.limit}
            onChange={onChangeDetails}
            name="limit"
            placeholder="Add Monthly limit..."
            autoComplete="off"
          />
        </label>
        <label className="m-2">
           Monthy Income:
          <input
            type="number"
            value={newDetails.income}
            onChange={onChangeDetails}
            name="income"
            placeholder="Add Monthy income..."
            autoComplete="off"
          />
        </label>
         
          <input className="mt-4" type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default AddDetails;