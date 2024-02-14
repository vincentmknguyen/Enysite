import React from "react";

const CardItem = ({ title, content, icon }) => {
  return (
    <div className="flex flex-col gap-4 text-center border rounded-lg p-4 shadow-md">
      <span className="material-symbols-outlined text-4xl text-mainblue">
        {icon}
      </span>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default CardItem;
