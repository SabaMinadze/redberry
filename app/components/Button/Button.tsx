import React from 'react';
import s from "./Button.module.css";

interface ButtonProps {
  title: string;
  color?: string; // Optional or you can specify "whitening" | string
}

const Button: React.FC<ButtonProps> = ({ title, color }) => {
  return (
    <button
      className={s.btn}
      style={{
        backgroundColor: color === "whitening" ? "white" : undefined,
        color: color === "whitening" ? "#F93B1D" : undefined,
        border: color === "whitening" ? "2px solid #F93B1D" : undefined,
      }}
    >
      {title}
    </button>
  );
};

export default Button;
