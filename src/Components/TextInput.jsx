import React from "react";

export default function TextInput({ type, placeholder }) {
  return (
    <div className="text-input">
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
