import React from 'react';
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  color?: string;
  onClick?: string;
}

const Button: React.FC<ButtonProps> = ({ title, color}) => {
    const classes = [styles.btn]

    if(color == "whitening") {
        classes.push(styles.whitening)
    }
    
    
  return (
    <button
      className={classes.join(' ')}>
      {title}
    </button>
  );
};

export default Button;
