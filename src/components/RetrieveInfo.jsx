import React, { useRef, useState } from "react";

const RetrieveInfo = () => {
  const [fetchedData, setFetchedData] = useState({});
  const aadharNo = useRef("");
  return (
    <div className='retrieve-info'>
      <h4>Retrieve Information</h4>
      <div className='aadhar-input'>
        <input type='text' name='aadharNo' ref={aadharNo} required />
        <button>Find</button>
      </div>
      <div className='display-data'>
        {Object.keys(fetchedData) === 0 && <h1>No Data Found</h1>}
      </div>
    </div>
  );
};

export default RetrieveInfo;
