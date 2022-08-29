import React from "react";

const Errors = ({ errors }) => {
  return (
    <>
      {errors.isErrors && (
        <div className="w-full px-2 py-1 mt-2 text-center bg-red-100 rounded-md">
          <p>{errors.errors}</p>
        </div>
      )}
    </>
  );
};

export { Errors };
