import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import navigation from "../data";
import Footer from '../components/Footer';

export default function about() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header items={navigation} navPosition="right" />
      </div>
    
     <div className='flex-1 items-center justify-center text-center lg:px-60 px-10 md:px-20 mb-40'>
     <h1 className='text-5xl font-bold my-10'>About</h1>
     <p className='text-base py-4 font-mono'>
        The Indian Society for Technical Education(ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System operating in association with All India Council for Technical Education (AICTE) and other International Projects.
       
        
      </p>
      <p className='text-base py-4 font-mono'>
      At present,ISTE has a very large and an effective membership base consisting of more than 1,02,985 Life Members,5,54,094 Student Members,2410 Institutional Members from IITs,NITs,IISc etc and 1322 Students’ Chapters.

      </p>
      <p className='text-base py-4 font-mono'>
      ISTE NIT Durgapur took birth on the auspicious occasion of Saraswati Puja Day way back in February,1995 in our erstwhile called REC Durgapur and is the Oldest Student Chapter of Eastern India.Additionally,ISTE NIT Durgapur nominates projects and papers for the Indian Journal of Technical Education (IJTE) published by the ISTE HQ,New Delhi on quarterly basis with the aim to provide an appropriate platform presenting well considered,meaningful,constructively thought provoking,non-political and non-conventional but critically analysing and synthesizing present and future aspects of the technical education system supported with meaningful suggestions for solutions,refinement and innovation.
     
      </p>
     </div>
     
      <Footer />
    </div>
  )
}
