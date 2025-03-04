import React, { useState } from "react";
import teamsData from "./CollegeBasketballTeams.json";
import TeamList from "./components/TeamList";
import Header from "./components/Header";

function App() {
  const [teams] = useState(teamsData.teams);

  return (
    <div>
      <Header />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
