import React, { useEffect, useState } from "react";
import s from "../styles/Events.module.scss";
import Header from "../components/Header";
import Title from "../components/Title";
import navigation from "../data";
import Footer from "../components/Footer";
import EventCard from "../components/EventsCard";
import Modal from "../components/EventsCard/Modal.component";
import Loader from "../components/loader/Loader";

import apiLinks from "../data/apiLink";
import Head from "next/head";

const Events = ({ ...otherProps }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${apiLinks.events}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  //animation code
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardInfo, setCardInfo] = useState(false);

  const showModal = (props) => {
    setCardInfo(props);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  // It will be executed before rendering

  // [] means like componentDidMount

  return isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
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
        <title>EVENTS | ISTE NITDGP</title>
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
      <div>
        <Header items={navigation} navPosition="right" home={false} />

        <Title title="OUR EVENTS" font="45" margin="75" />
        <div className={s.wrapper}>
          {events.map((event) => {
            return (
              <EventCard
                key={event.id}
                img={event.Image}
                title={event.EventName}
                description={event.Description}
                startDate={event.StartDate}
                endDate={event.EndDate}
                location={event.Location}
                showModal={showModal}
                link={event.Link}
              />
            );
          })}
          {/* <EventCard
            img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
            title="Tie Up Boots"
            description="Fall Favorite • Boots"
            date="1/06/2022"
            location="Online"
            showModal={showModal}
          /> */}
        </div>
        <Modal
          visible={isModalVisible}
          close={closeModal}
          cardInfo={cardInfo}
        />
        <Footer />
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   const res = await fetch("http://127.0.0.1:8000/api/events/");
//   const events = await res.json();

//   // By returning { props: { events } }, the component
//   // will receive `events` as a prop at build time
//   return {
//     props: {
//       events,
//     },
//   };
// }

export default Events;
