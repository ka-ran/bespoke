import React from "react";
import { Dropdown } from "../../utils/components/dropdown/Dropdown";

interface FilterMembersProps {}

export const FilterMembers: React.FC<FilterMembersProps> = ({}) => {
  return (
    <div>
      Filter Members by activity: <Dropdown></Dropdown>
    </div>
  );
};
