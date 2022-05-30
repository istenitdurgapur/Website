import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';

export default function team() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header items={navigation} navPosition="right" />
      </div>
      <h1 className={styles.h}>Team</h1>
      <Footer />
    </div>
  )
}
