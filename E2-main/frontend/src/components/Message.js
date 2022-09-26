import React from "react";

const Message = ({ message, variant = "info", onClose }) => {
  const color = {
    info: "bg-blue-500",
    danger: "bg-red-500",
  };
  return (
    <div
      className={`fixed inset-0 flex items-center ${color[variant]} text-white text-sm font-bold px-4 py-3 h-12`}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
