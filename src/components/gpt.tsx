import React from "react";
// components/ui/card.tsx

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md border border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className = "" }) => {
  return <div className={`p-4 text-gray-800 ${className}`}>{children}</div>;
};

// components/ui/button.tsx

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-6 py-2 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
