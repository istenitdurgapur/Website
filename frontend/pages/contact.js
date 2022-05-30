import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import navigation from "../data"; 


export default function contact() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header items={navigation} navPosition="right" />
      </div>
      <h1 className={styles.h}>Contact</h1>
     
    </div>
  )
}
