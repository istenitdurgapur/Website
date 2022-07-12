import React from "react";
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import TeamSection from "../components/Teams/TeamSection";
import Title from "../components/Title"

function Team() {
  const styles = {
    marginTop : "120px"
  }
  return (
    <div style={styles}  >
      <Header items={navigation} navPosition="right" home={false} />
      <Title title="OUR TEAM" font="45" margin="60" />
      <TeamSection title="OFFICE BEARERS" year={4} />
      <TeamSection title="THIRD YEARS" year={3} />
      <TeamSection title="SECOND YEARS" year={2} />
      <Footer />
    </div>
  );
}

export default Team;
