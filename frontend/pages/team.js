import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import TeamCard from "../components/Teams/TeamCard";

function Team() {
  return (
    <div>
      <div className={styles.header}>
        <Header items={navigation} navPosition="right" />
      </div>
      <p className="flex justify-center items-center  text-gray-600  text-2xl lg:text-5xl underline underline-offset-4 decoration-1 mt-16">
        MEET OUR TEAM
        </p>
      <TeamCard title="OFFICE BEARERS" year={4} />
      <TeamCard title="THIRD YEARS" year={3} />
      <TeamCard title="SECOND YEARS" year={2} />
      <Footer />
    </div>
  );
}

export default Team;
