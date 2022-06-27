import React from "react";
import s from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import navigation from "../data";
import Carousels from "../components/Carousel/Carousels";

export default function Home() {
  return (
    <div>
      <Header items={navigation} navPosition="right" fontColor="white" />
      <section className={s.hero}>
        <div className={s.heroImageContainer}></div>
      </section>
      <div className={s.container}>
        <section className={s.about}>
          <h1>About</h1>
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
        <section className={s.faculty}>
          <h1 className="mb-6">PHOTO GALLERY</h1>
          <Carousels />
        </section>

        <section className={s.faculty}>
          <h1>Faculty Advisors</h1>
          <div className={s.wrapper}>
            <div className={`${s.profileCard}`}>
              <div className={s.profileCard__img}>
                <img src="http://istenitdgp.com/fa2.png" alt="profile card" />
              </div>
              <div className={`${s.profileCard__cnt} ${s.jsProfileCnt}`}>
                <div className={s.profileCard__name}>
                  Dr. Anita Pal <br /> CHIEF-FACULTY ADVISOR
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
                  Prof. Rowdra Ghatak <br /> FACULTY ADVISOR
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
          <h1>Our sponsers</h1>
          <div className={s.slider}>
            <div className={s.slideTrack}>
              <div className={s.slide}>
                <img
                  src="https://www.scorepromotions.com/assets/score/img/clients/Air-Canada-01.jpg"
                  height="100"
                  width="100"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className={s.slide}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
