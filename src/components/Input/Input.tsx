import React from "react";

interface InputProps {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ icon, iconPosition = "left", className, ...props }) => {
  return (
    <div
      className={`flex items-center w-[470px] h-[40px] rounded-[5px] gap-[10px] p-[10px] text-inputText border 
       text-sm border-searchBorder relative ${className}`}
    >
      {/* Left Icon */}
      {icon && iconPosition === "left" && (
        <span className="text-plcaeholderWhite">{icon}</span>
      )}

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search Here......."
        className="bg-transparent text-white placeholder-plcaeholderWhite outline-none w-full"
        {...props}
      />

      {/* Right Icon */}
      {icon && iconPosition === "right" && (
        <span className="text-plcaeholderWhite">{icon}</span>
      )}
    </div>
  );
};

export default Input;
