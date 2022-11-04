import React from "react";
import { useState } from "react";
import { STUDENTS } from "../studentsList";
// import { addStudent } from "../app/store";
import { addStudent } from "../appSlice";
import { useDispatch } from "react-redux";
import { errorMessage, clearError, expiredValidity } from "../errorSlice";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search() {
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    name: "",
    joiningDate: "",
  });

  const onChange = (event) => {
    setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    if (formDetails.name === "") {
      alert("name cannot be blank");
      return;
    }
    if (formDetails.joiningDate === "") {
      alert("Date cannot be blank");
      return;
    }
    dispatch(clearError());
    let count = 0;
    STUDENTS.forEach((item) => {
      if (
        item.name.toLocaleLowerCase().includes(formDetails.name.toLowerCase())
      ) {
        const validity = checkValidity(
          formDetails.joiningDate,
          item.validityDate
        );
        if (validity === false) {
          dispatch(clearError());
          dispatch(expiredValidity(formDetails.name));
        } else {
          dispatch(addStudent(formDetails.name));
          count = count + 1;
        }
      }
    });

    //no student found
    if (count < 1) {
      dispatch(errorMessage(formDetails.name));
    }
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            name="name"
            className="mr-30 mt-10"
            onChange={onChange}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            name="joiningDate"
            className="mr-30 mt-10"
            onChange={onChange}
          />
        </div>
      </label>
      <button
        onClick={handleSubmit}
        type="button"
        data-testid="addBtn"
        className="small mb-0">
        Add
      </button>
    </div>
  );
}

export default Search;
