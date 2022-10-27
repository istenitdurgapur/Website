import React, { useEffect, useState } from "react";
import Head from "next/head";
import s from "../styles/team.module.scss";

import Header from "../components/Header";
import navigation from "../data";
import Footer from "../components/Footer";
import TeamSection from "../components/Teams/TeamSection";
import Loader from "../components/loader/Loader";
import Link from "next/link";

import apiLinks from "../data/apiLink";

function Team() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${apiLinks.teams}`)
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
      });
  }, []);

  // loader screen
  // const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  // useEffect(() => {
  //   setTimeout(() => setSpinner(false), 0);
  // }, []);

  // // [] means like componentDidMount

  // return spinner ? (
  //   <div>
  //     <Loader />
  //   </div>
  // ) : (
  return (
    <div className={s.container}>
      <Head>
        {/* <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* <!-- The above 3 meta tags *must* come first in the head --> */}

        {/* <!-- SITE TITLE --> */}
        <title>TEAM | ISTE NITDGP</title>
        <meta
          name="description"
          content="ISTE Students' Chapter NIT Durgapur"
        />
        <meta
          name="keywords"
          content="ISTE,NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR,NIT Durgapur clubs,NIT Durgapur Society,ISTE Students' Chapter"
        />
        <meta name="author" content="Abhishek Krishna@istenitdgp" />
      </Head>
      <Header items={navigation} navPosition="right" home={false} />
      <div className="flex justify-center align-center text-center ">
        <Link href="/team">
          <h1 className="cursor-pointer text-blue-600 text-3xl font-semibold flex text-center items-center justify-center underline decoration-1 decoration-black underline-offset-8">
            TEAM
          </h1>
        </Link>
        <h1 className="text-2xl flex items-center justify-center mx-6"> / </h1>
        <Link href="/alumni">
          <h1 className="cursor-pointer text-3xl font-semibold flex text-center items-center justify-center">
            ALUMNI
          </h1>
        </Link>
      </div>
      <TeamSection teams={teams} title="OFFICE BEARERS" year={4} />
      <TeamSection teams={teams} title="THIRD YEARS" year={3} />
      <TeamSection teams={teams} title="SECOND YEARS" year={2} />

      <Footer />
    </div>
  );
}

export default Team;

// export async function getStaticProps() {
//   const res = await fetch("http://13.127.85.83/api/student/");
//   const teams = await res.json();
//   // const res2 = await fetch("http://127.0.0.1:8000/api/alumni/");
//   // const alumni = await res2.json();

//   return {
//     props: {
//       teams,
//       // alumni,
//     },
//   };
// }
