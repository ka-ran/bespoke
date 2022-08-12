import React from "react";
import "./Row.css";

interface RowProps {
  key?: string;
  children: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({ key, children }) => {
  return (
    <div key={key} className="row">
      {children}
    </div>
  );
};
