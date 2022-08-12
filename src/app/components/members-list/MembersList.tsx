import React from "react";
import Member from "../../repo/members/Member";
import Spinner from "../../utils/components/spinner/Spinner";
import "./MembersList.css";

interface MembersListProps {
  members: {
    data?: Member[];
    isLoading: boolean;
    error?: string;
  };
  onMemberRemove(arg0: string): void;
}

let getMembersList = (
  members: Member[],
  onMemberRemove: (arg0: string) => void
) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Rating</th>
        <th>Activities</th>
      </tr>
      {members.map((member) => (
        <tr key={member.id}>
          <td>{member.name}</td>
          <td>{member.age}</td>
          <td>{member.rating}</td>
          <td>{member.activities.join(",")}</td>
          <td>
            <button onClick={(_) => onMemberRemove(member.id)}>Remove</button>{" "}
          </td>
        </tr>
      ))}
    </table>
  );
};

export const MembersList: React.FC<MembersListProps> = ({
  members,
  onMemberRemove,
}) => {
  return (
    <div>
      {members.isLoading ? (
        <Spinner></Spinner>
      ) : members.data ? (
        getMembersList(members.data, onMemberRemove)
      ) : members.error ? (
        <div>{members.error}</div>
      ) : null}
    </div>
  );
};
