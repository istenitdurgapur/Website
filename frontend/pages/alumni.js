import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import AlumniSection from "../components/Alumni/AlumniSection";
import Title from "../components/Title"
import Loader from "../components/loader/Loader";

function Alumni({alumni}) {
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
   ) :
 
 
  (
    <div style={styles} >
      <Header items={navigation} navPosition="right" home={false} />
      <Title title="OUR ALUMNI" font="45" margin="60" />
      
      <AlumniSection alumni={alumni}  year={2020} />
      <AlumniSection alumni={alumni} year={2021} />
      <AlumniSection alumni={alumni} year={2022} />
      <AlumniSection alumni={alumni}  year={2023} />
      <AlumniSection alumni={alumni} year={2024} />
      <AlumniSection alumni={alumni} year={2025} />
      <AlumniSection alumni={alumni}  year={2026} />
      <AlumniSection alumni={alumni} year={2027} />
      <AlumniSection alumni={alumni} year={2028} />
      <AlumniSection alumni={alumni}  year={2029} />
      <AlumniSection alumni={alumni} year={2030} />
      <AlumniSection alumni={alumni} year={2031} />
      <AlumniSection alumni={alumni}  year={2032} />
      <AlumniSection alumni={alumni} year={2033} />
      <AlumniSection alumni={alumni} year={2034} />
      <AlumniSection alumni={alumni}  year={2035} />
      <AlumniSection alumni={alumni}  year={2036} />
      <AlumniSection alumni={alumni}  year={2037} />
      <AlumniSection alumni={alumni}  year={2038} />
      <AlumniSection alumni={alumni}  year={2039} />
      <AlumniSection alumni={alumni}  year={2040} />
     
      <Footer />
    </div>
  );
}

export default Alumni;


export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/alumni/");
  const alumni = await res.json();

  return {
    props: {
      alumni,
    },
  };
}