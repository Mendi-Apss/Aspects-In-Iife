"use client";
import styles from './Card.module.css'

const Card = () => {
  return <div className={styles.card} onClick={() => console.log('hello')}></div>;
};

export default Card;
