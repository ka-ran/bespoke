import React from "react";
import "./SearchInput.css";

interface SearchInputProps {
  searchTerm: string | null;
  onChange(arg0: string): void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  onChange,
}) => {
  return (
    <input
      id="search-input"
      type="search"
      placeholder="Name..."
      required
      autoFocus
      value={searchTerm == null ? "" : searchTerm}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
