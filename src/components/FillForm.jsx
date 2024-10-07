import React, { useRef } from "react";
import calculateAge from "age-calculator-sm";

const FillForm = ({updateUserData}) => {
  const ageInput = useRef("");

  const handleAge = (e) => {
    console.log(e.target.value);
    if (e.target.value.length === 10)
      ageInput.current.value = calculateAge(e.target.value).years;
  };

  const handleFormData = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.elements.username.value,
      dateOfBirth: e.target.elements.dob.value,
      aadharNumber: e.target.elements.aadhar.value,
      mobile: e.target.elements.mobile.value,
      age: ageInput.current.value,
    };

    const storedData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : [];
    localStorage.setItem("userData", JSON.stringify([...storedData, data]));
    updateUserData();
  };
  return (
    <div className='fill-form'>
      <h3>Fill below form for New Entry</h3>
      <form onSubmit={handleFormData}>
        <input type='text' name='username' placeholder='Name' required />
        <input type='date' name='dob' onInput={handleAge} required />
        <input
          type='text'
          name='aadhar'
          placeholder='Aadhar Number'
          min={10000000000}
          max={999999999999}
          required
        />
        <input type='tel' name='mobile' placeholder='Mobile Number' />
        <input
          type='text'
          name='age'
          placeholder='Age'
          ref={ageInput}
          value={ageInput.current.value}
          disabled
        />
        <input type='submit' value='Save' />
      </form>
    </div>
  );
};

export default FillForm;
