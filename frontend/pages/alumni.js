import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import navigation from "../data";
import Footer from "../components/Footer";
import AlumniSection from "../components/Alumni/AlumniSection";
import Link from "next/link";
import Loader from "../components/loader/Loader";
import apiLinks from "../data/apiLink";
import Head from "next/head";

function Alumni() {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    fetch(`${apiLinks.alumni}`)
      .then((res) => res.json())
      .then((data) => {
        setAlumni(data);
      });
  }, []);

  const styles = {
    marginTop: "120px",
  };
  const headerStyle = {
    display: "flex",
    width: "45%",
    marginRight: "auto",
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  };

  // loader screen
  //  const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  //  useEffect(() => {
  //    setTimeout(() => setSpinner(false), 0)
  //  }, []);

  //  // [] means like componentDidMount

  //  return spinner ? (
  //    <div>
  //    <Loader/>
  //    </div>
  //  ) :

  // (
  return (
    <div style={styles}>
      <Head>
      {/* <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* <!-- The above 3 meta tags *must* come first in the head --> */}

        {/* <!-- SITE TITLE --> */}
        <title>ALUMNI | ISTE NITDGP</title>
        <meta
          name="description"
          content="ISTE Students' Chapter NIT Durgapur"
        />
        <meta
          name="keywords"
          content="ISTE,NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR,NIT Durgapur clubs,NIT Durgapur Society,ISTE Students' Chapter"
        />
        <meta name="author" content="Abhsihek Krishna@istenitdgp" />
      </Head>
      <Header items={navigation} navPosition="right" home={false} />
      <div className="flex justify-center align-center text-center ">
        <Link href="/team">
          <h1 className=" text-3xl font-semibold flex text-center items-center justify-center">
            TEAM
          </h1>
        </Link>
        <h1 className="text-2xl flex items-center justify-center mx-6"> / </h1>
        <Link href="/alumni">
          <h1 className="text-blue-600 text-3xl font-semibold flex text-center items-center justify-center underline decoration-1 decoration-black underline-offset-8">
            ALUMNI
          </h1>
        </Link>
      </div>

      <AlumniSection alumni={alumni} year={2029} />
      <AlumniSection alumni={alumni} year={2028} />
      <AlumniSection alumni={alumni} year={2027} />
      <AlumniSection alumni={alumni} year={2026} />
      <AlumniSection alumni={alumni} year={2026} />
      <AlumniSection alumni={alumni} year={2025} />
      <AlumniSection alumni={alumni} year={2024} />
      <AlumniSection alumni={alumni} year={2023} />
      <AlumniSection alumni={alumni} year={2022} />
      <AlumniSection alumni={alumni} year={2021} />
      <AlumniSection alumni={alumni} year={2020} />

      <Footer />
    </div>
  );
}

export default Alumni;

// export async function getStaticProps() {
//   const res = await fetch("http://127.0.0.1:8000/api/alumni/");
//   const alumni = await res.json();

//   return {
//     props: {
//       alumni,
//     },
//   };
// }
