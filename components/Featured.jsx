import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../styles/Featured.module.css";

const Featured = () => {

    const [index, setIndex] = useState(0)

    const images = [
        "/img/featured12.jpeg",
        "/img/featured22.jpeg",
        "/img/featured33.jpeg",
        // "/img/featured4.jpeg",
    ];


    const handleArrow = (direction) =>{
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }

    console.log(index)
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:20}} onClick={()=>handleArrow("l")}>
            <Image src="/img/arrowl.png" alt="" objectFit="contain" layout="fill" />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            {images.map((img, i) => (
                <div className={styles.imgContainer} key={i} >
                    <Image src={img} alt="" layout="fill" objectFit="contain" />
                </div>
            ))}
        </div>
        <div className={styles.arrowContainer} style={{right:20}} onClick={()=>handleArrow("r")}>
            <Image src="/img/arrowr.png" alt="" objectFit="contain" layout="fill" />
        </div>
    </div>
  )
}

export default Featured