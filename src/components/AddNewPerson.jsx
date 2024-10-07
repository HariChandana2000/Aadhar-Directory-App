import React, { useState } from "react";
import FillForm from "./FillForm";

function getData() {
  const data = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : [];
  return data;
}

const AddNewPerson = () => {
  const [userData, setUserData] = useState(() => getData());
  const [showForm, setShowForm] = useState(false);

  const handleAddButton = () => {
    setShowForm(true);
  };

  const updateUserData = () => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
    setShowForm(false);
  };

  const handleDelete = (aadharNumber) => {
    const filteredData = userData.filter(
      (item) => item.aadharNumber !== aadharNumber
    );
    localStorage.setItem("userData", JSON.stringify(filteredData));
    setUserData(JSON.parse(localStorage.getItem("userData")));
  };

  return (
    <div className='main-content'>
      <h4>Add New Person</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.length === 0 ? (
            <tr>
              <th colSpan={6} className='col-span'>
                No data
              </th>
            </tr>
          ) : (
            userData.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.aadharNumber}</td>
                <td>{item.mobile}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className='delete-btn'
                    onClick={() => handleDelete(item.aadharNumber)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {showForm && <FillForm updateUserData={updateUserData} />}
      <button className='add-btn' onClick={handleAddButton}>
        Add
      </button>
    </div>
  );
};

export default AddNewPerson;
