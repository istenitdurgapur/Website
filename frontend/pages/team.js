import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import TeamSection from "../components/Teams/TeamSection";
import Title from "../components/Title"
import Loader from "../components/loader/Loader";

function Team({teams}) {
  const styles = {
    marginTop : "120px"
  }
   // loader screen 
   const [spinner, setSpinner] = useState(true);

   // It will be executed before rendering
 
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, []);
 
   // [] means like componentDidMount
 
 
 
   return spinner ? (
     <div>
     <Loader/>
     </div>
   ) :(
    <div style={styles}  >
      <Header items={navigation} navPosition="right" home={false} />
      <Title title="OUR TEAM" font="45" margin="60" />
      <TeamSection teams={teams} title="OFFICE BEARERS" year={4} />
      <TeamSection teams={teams} title="THIRD YEARS" year={3} />
      <TeamSection teams={teams} title="SECOND YEARS" year={2} />
      <Footer />
    </div>
  );
}

export default Team;



export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/student/");
  const teams = await res.json();

  return {
    props: {
      teams,
    },
  };
}