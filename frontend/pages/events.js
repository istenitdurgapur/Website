import styles from '../styles/Home.module.css'
import s from '../styles/Events.module.scss'
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import EventCard from '../components/EventsCard';

export default function events() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header items={navigation} navPosition="right" />
      </div>
      {/* <h1 className={styles.h}>Events</h1> */}
      <div className={s.wrapper}>
      <EventCard
        img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
        title="Tie Up Boots"
        description="Fall Favorite • Boots"
        date="1/06/2022"
        location="Online"
      />
      <EventCard img="https://images.unsplash.com/photo-1569235080412-01b4eefa5fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        title="White Blouse"
        description="Blouse • Lacey"
        date="1/06/2022"
        location="Online"
       />
      <EventCard
        img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        title="Plush Sweater"
        description="Sweater Season • Cozy"
        date="1/06/2022"
        location="Online"
      />
      <EventCard
        img="https://images.unsplash.com/photo-1475178626620-a4d074967452?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
        title="Slim-Fit Demin"
        description="Demin • Verstile"
        date="1/06/2022"
        location="Online"
      />
    </div>
    <Footer />
    </div>
  )
}
