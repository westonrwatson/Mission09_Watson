import React from "react";
import TeamCard from "./TeamCard";

const TeamList = ({ teams }) => {
  return (
    <div style={{ padding: "20px" }}>
      {teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          mascot={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
};

export default TeamList;
