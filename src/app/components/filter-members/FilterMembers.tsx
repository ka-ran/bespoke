import React from "react";

interface FilterMembersProps {
  onFilterSelect(arg0: string): void;
}

export const FilterMembers: React.FC<FilterMembersProps> = ({
  onFilterSelect,
}) => {
  return (
    <div>
      <select
        name="Activity"
        onChange={(event) => onFilterSelect(event.target.value)}
      >
        <option value="none">None</option>
        <option value="Hiking">Hiking</option>
        <option value="Running">Running</option>
        <option value="Biking">Biking</option>
      </select>
    </div>
  );
};
