import React from "react";

type ButtonProps = {
  icon?: React.ReactNode;
  title?: string;
  iconAlignment?: "right" | "left";
};

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLDivElement>> = ({
  icon,
  title = '',
  iconAlignment = 'left',
  className,
  ...props
}) => {
  return (
    <div
      className={`flex gap-[10px] items-center py-[10px] px-[15px] border border-borderPurple cursor-pointer  ${
        iconAlignment === "left" ? "flex-row" : "flex-row-reverse"
      } ${className}`}
      {...props}
    >
      {icon && icon}
      {title}
    </div>
  );
};

export default Button;
