import Image from 'next/image';
import React from 'react';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
        </div>\
        <div className={styles.card}>
         <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
         <p className={styles.text}>
           1654 R. Don Road #304.
           <br /> NewYork, 85022
           <br /> (602)867-1010
         </p>
         <p className={styles.text}>
           1654 R. Caroll St #304.
           <br /> NewYork, 85022
           <br /> (602)867-1010
         </p>
         <p className={styles.text}>
           2356 K. Laquire Rd #235.
           <br /> NewYork, 85022
           <br /> (602)867-1010
         </p>
         <p className={styles.text}>
           1654 E. ErwinSt Road #304.
           <br /> NewYork, 85022
           <br /> (602)867-1010
         </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
           MONDAY = FRIDAY
           <br /> 9:00 - 22:00
         </p>
          <p className={styles.text}>
           SATURDAY - SUNDAY
           <br /> 12:00 - 24:00
         </p>
        </div>
      </div>
          Footer
    </div>
  )
}

export default Footer