import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase tracking-wider";
  
  const variants = {
    primary: "bg-dental-600 text-white hover:bg-dental-800 focus:ring-dental-500 shadow-lg hover:shadow-xl border border-transparent",
    secondary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
    outline: "border border-dental-600 text-dental-600 hover:bg-dental-50 focus:ring-dental-500",
    white: "bg-white text-dental-700 hover:bg-gray-50 focus:ring-white shadow-md",
    gold: "bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 focus:ring-gold-400 shadow-md hover:shadow-lg"
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;