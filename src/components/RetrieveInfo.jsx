import React, { useRef, useState } from "react";

const RetrieveInfo = () => {
  const [fetchedData, setFetchedData] = useState({});
  const aadharNo = useRef("");

  const handleFind = () => {
    const data = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : [];

    const user = data.find(
      (item) => item.aadharNumber === aadharNo.current.value
    );
    if (user) {
      setFetchedData(user);
    } else {
      setFetchedData({});
    }
  };

  return (
    <div className='retrieve-info'>
      <h4>Retrieve Information</h4>
      <div className='aadhar-input'>
        <input type='text' name='aadharNo' ref={aadharNo} required />
        <button onClick={handleFind}>Find</button>
      </div>
      <div className='display-data'>
        {Object.keys(fetchedData).length === 0 ? (
          <h1>No Data Found</h1>
        ) : (
          <div className="details">
            <p>{`Name: ${fetchedData.name}`}</p>
            <p>{`DOB: ${fetchedData.dateOfBirth}`}</p>
            <p>{`Aadhar: ${fetchedData.aadharNumber}`}</p>
            <p>{`Mobile no: ${fetchedData.mobile}`}</p>
            <p>{`Age: ${fetchedData.age}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetrieveInfo;
