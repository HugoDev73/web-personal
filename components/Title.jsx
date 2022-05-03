import React from "react";

const Title = ({ text }) => {
  return (
    <>
      <div className="titulo mb-5 mt-5">
        <h2 className="font-bold text-2xl text-dark dark:text-gray-100">{text}</h2>
        <div className="mx-0 w-1/5 pt-3 border-b-2 border-primary mb-6" />
      </div>
    </>
  );
};

export default Title;