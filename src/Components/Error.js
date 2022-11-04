import React from "react";
import { useSelector } from "react-redux";

function Error() {
  const stateErrors = useSelector((state) => state.errors);
  if (stateErrors.length > 0) {
    return (
      <div
        data-testid="errorMsg"
        className="alert error mt-20 slide-up-fade-in">
        {stateErrors.map((err) => (
          <p key={err.msg}>{err.msg}</p>
        ))}
      </div>
    );
  } else {
    return <div />;
  }
}

export default Error;
