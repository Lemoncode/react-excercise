import * as React from "react";
import { MemberEntity } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";

interface Props {}

export const MembersTableComponent = (props: Props) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const loadMembers = () => {
    memberAPI.getAllMembers("lemoncode").then(members => setMembers(members));
  };

  return (
    <div className="row">
      <h2> Members Page</h2>
      <button onClick={loadMembers}>Load</button>
      <table className="table">
        <thead>
          <MemberHead />
        </thead>
        <tbody>
          {members.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
