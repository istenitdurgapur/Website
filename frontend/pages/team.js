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
    <div className={styles.container}>
      <div className={styles.header}>
        <Header items={navigation} navPosition="right" />
      </div>
      <TeamCard />
      <Footer />
    </div>
  );
}

export default Team;
