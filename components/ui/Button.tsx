import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-500 font-sans tracking-widest text-sm uppercase text-xs";
  
  const variants = {
    primary: "bg-japandi-charcoal text-japandi-cream hover:bg-japandi-terracotta hover:shadow-lg",
    outline: "border border-japandi-charcoal text-japandi-charcoal hover:bg-japandi-charcoal hover:text-japandi-cream",
    text: "text-japandi-charcoal border-b border-transparent hover:border-japandi-charcoal px-0 rounded-none py-1"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};