import React from "react";
import { useSelector } from "react-redux";

function ResidentsList() {
  const students = useSelector((state) => state.students);
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {students.map((student) => (
          <li
            key={Math.floor(Math.random() * 100)}
            className="slide-up-fade-in">
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentsList;
