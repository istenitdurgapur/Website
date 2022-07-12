import React from "react";
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import AlumniSection from "../components/Alumni/AlumniSection";
import Title from "../components/Title"

function Alumni() {
  const styles = {
    marginTop : "120px"
  }
  return (
    <div style={styles} >
      <Header items={navigation} navPosition="right" home={false} />
      <Title title="OUR ALUMNI" font="45" margin="60" />
      
      <AlumniSection  year={2020} />
      <AlumniSection year={2021} />
      <AlumniSection year={2022} />
      <AlumniSection  year={2023} />
      <AlumniSection year={2024} />
      <AlumniSection year={2025} />
      <AlumniSection  year={2026} />
      <AlumniSection year={2027} />
      <AlumniSection year={2028} />
      <AlumniSection  year={2029} />
      <AlumniSection year={2030} />
      <AlumniSection year={2031} />
      <AlumniSection  year={2032} />
      <AlumniSection year={2033} />
      <AlumniSection year={2034} />
      <AlumniSection  year={2035} />
      <AlumniSection  year={2036} />
      <AlumniSection  year={2037} />
      <AlumniSection  year={2038} />
      <AlumniSection  year={2039} />
      <AlumniSection  year={2040} />
     
      <Footer />
    </div>
  );
}

export default Alumni;
