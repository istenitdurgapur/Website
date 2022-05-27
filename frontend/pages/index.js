import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import navigation from "../data"; 


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header items={navigation} navPosition="right" />
      </div>
      <h1 className={styles.h}>ISTE</h1>
      {/* <div className={styles.text}>
        <p>hello</p>
      </div> */}
    </div>
  )
}
