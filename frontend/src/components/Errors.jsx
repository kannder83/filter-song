import React from "react";

const Errors = ({ errors }) => {
  return (
    <>
      {errors.isErrors && (
        <div className="w-full">
          <p>{errors.errors}</p>
        </div>
      )}
    </>
  );
};

export { Errors };
