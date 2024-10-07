import React from "react";
import { Link } from "react-router-dom";

const Navigators = () => {
  return (
    <div className='navigators'>
      <Link to='/'>
        <button>Add New Person</button>
      </Link>
      <Link to='/retrieve'>
        <button>Retrieve Information</button>
      </Link>
    </div>
  );
};

export default Navigators;
