import React from 'react';
import Container from "./components/Container"
import ProfilePage from "./components/ProfilePage"
import EducationPage from "./components/EducationPage"
import ExperiencesPage from "./components/ExperiencesPage"
import SkillsPage from "./components/SkillsPage"

function App() {
  return (
    <div className="App">
      <Container>
        <ProfilePage themeColor={"#D3FFFF"} title={"Profile"}/>
        <EducationPage themeColor={"#DAFFF1"} title={"Education"}/>
        <ExperiencesPage themeColor={"#FFE7EC"} title={"Experiences"}/>
        <SkillsPage themeColor={"#FFF9F0"} title={"Skills"}/>        
      </Container>
    </div>
  );
}

export default App;
