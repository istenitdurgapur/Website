import React from "react";
import s from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import navigation from "../data";
import Carousels from "../components/Carousel/Carousels";
import Tiltle from "../components/Title";

export default function Home({ images, sponsers }) {
  return (
    <div>
      <Header items={navigation} navPosition="right" home={true} />
      <section className={s.hero}>
        <div className={s.heroImageContainer}></div>
      </section>
      <div className={s.container}>
        <section className={s.about}>
          <Tiltle title="ABOUT US" font="36" margin="30" />
          <p>
            The Indian Society for Technical Education(ISTE) is the leading
            National Professional non-profit making Society for the Technical
            Education System in our country with the motto of Career Development
            of Teachers and Personality Development of Students and overall
            development of our Technical Education System operating in
            association with All India Council for Technical Education (AICTE)
            and other International Projects.
          </p>
        </section>
        <section className={s.gallery}>
          <Tiltle title="PHOTO GALLERY" font="36" margin="30" />
          <div className={s.Carousel}>
            <Carousels images={images} />
          </div>
        </section>

        <section className={s.faculty}>
          <Tiltle title="FACULTY ADVISORS" font="36" margin="30" />
          <div className={s.wrapper}>
            <div className={`${s.profileCard}`}>
              <div className={s.profileCard__img}>
                <img src="http://istenitdgp.com/fa2.png" alt="profile card" />
              </div>
              <div className={`${s.profileCard__cnt} ${s.jsProfileCnt}`}>
                <div className={s.profileCard__name}>
                  Dr. Anita Pal <br /> <span className={s.profileCard__name__designation} > CHIEF-FACULTY ADVISOR </span>
                </div>
                <div className={s.profileCard__txt}>
                  {/* Get abuzz and shroud yourself with knowledge to extinguish
                  moribundity,as knowledge is a wing with which one can fly to
                  the heaven. */}
                </div>
              </div>
            </div>
            <div className={`${s.profileCard}`}>
              <div className={s.profileCard__img}>
                <img
                  src="http://istenitdgp.com/rowdra.png"
                  alt="profile card"
                />
              </div>
              <div className={`${s.profileCard__cnt} ${s.jsProfileCnt}`}>
                <div className={s.profileCard__name}>
                  Prof. Rowdra Ghatak <br /><span className={s.profileCard__name__designation} > FACULTY ADVISOR </span>
                </div>
                <div className={s.profileCard__txt}>
                  {/* Nothing in this world can take the place of persistence.
                  Talent will not: nothing is more common than unsuccessful men
                  with talent. Genius will not; unrewarded genius is almost a
                  proverb. Education will not: the world is full of educated
                  derelicts. Persistence and determination alone are omnipotent. */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.sponsers}>
          <Tiltle title="OUR SPONSERS" font="36" margin="30" />
          <div className={s.slider}>
            <div className={s.slideTrack}>
              {sponsers.map((data) => {
                return (
                  <div key={data.id} className={s.slide}>
                    <img
                      src={data.Image}
                      height="100"
                      width="100"
                      alt=""
                    />
                  </div>

                )

              })}

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}




export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res1 = await fetch("http://127.0.0.1:8000/api/gallery/");
  const res2 = await fetch("http://127.0.0.1:8000/api/sponsers/");
  const images = await res1.json();
  const sponsers = await res2.json();

  // By returning { props: { events } }, the component
  // will receive `events` as a prop at build time
  return {
    props: {
      images, sponsers,
    },
  };
}

