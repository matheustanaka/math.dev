import Image from "next/image"
import styles from "./home.module.scss"
import img from '../../public/me.jpeg'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

export default function Home() {
  return (
    <>
    <section className={styles.homeContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a>
            Home
          </a>
          <a>
            Blog
          </a>
          <a>
            About
          </a>
          <a>
            Contact
          </a>
        </nav>
      </div>
      <div className={styles.profileContent}>
        <Image className={styles.img} src={img} alt='myself' width={180} height={180}/>
        <h1> Matheus Tanaka</h1>
        <p>Hey, call me Math. <br/>Im full-stack developer and I like to build cool things</p>
        <div className={styles.contact}>
          <a>
            <FiGithub className={styles.github} size={25}/>
          </a>
          <a>
            <HiOutlineMail className={styles.email} size={25}/>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
