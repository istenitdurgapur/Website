import React, { useEffect, useState } from "react";
import Head from "next/head";
import s from "../styles/blog.module.css";
import Header from "../components/Header";
import navigation from "../data";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Loader from "../components/loader/Loader";
import GalleryImage from "../components/GalleryImage/GalleryImage";

import apiLinks from "../data/apiLink"; 

function Gallery() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch(`${apiLinks.gallery}`).then((gallery) => gallery.json()),
    ]).then(([gallery]) => {
      setData(gallery);
      setLoading(false);
    });
  }, []);

  if (!data) return <p>Backend have some problem check your api</p>;

  return isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className={s.mainContainer}>
      <Head>
        {/* <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* <!-- The above 3 meta tags *must* come first in the head --> */}

        {/* <!-- SITE TITLE --> */}
        <title>GALLERY | ISTE NITDGP</title>
        <meta
          name="description"
          content="ISTE Students' Chapter NIT Durgapur"
        />
        <meta
          name="keywords"
          content="ISTE,NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR,NIT Durgapur clubs,NIT Durgapur Society,ISTE Students' Chapter"
        />
        <meta name="author" content="Avinash Yeddu" />
      </Head>
      <Header items={navigation} navPosition="right" home={false} />
      <Title title="OUR GALLERY" font="45" margin="70" />
      <div className={s.container}>
        <div className={s.gallery}>
          <GalleryImage images={data} />
        </div>
      </div>
      <Footer />

    </div>

  );
}

export default Gallery;


