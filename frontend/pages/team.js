import React from "react";
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import TeamSection from "../components/Teams/TeamSection";

function Team() {
  return (
    <div>
      <div className={styles.header}>
        <Header items={navigation} navPosition="right" />
      </div>
      <p className="flex justify-center items-center  text-gray-600  text-2xl lg:text-5xl underline underline-offset-4 decoration-1 mt-16">
        MEET OUR TEAM
        </p>
      <TeamSection title="OFFICE BEARERS" year={4} />
      <TeamSection title="THIRD YEARS" year={3} />
      <TeamSection title="SECOND YEARS" year={2} />
      <Footer />
    </div>
  );
}

export default Team;
