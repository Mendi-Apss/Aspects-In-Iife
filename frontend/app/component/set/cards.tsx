"use client";

import Card from "./card";
import styles from "./Cards.module.css";

const Cards = () => {
  const cardsAmount = [];
  for (let i = 0; i < 12; i++) {
    cardsAmount.push(i);
  }
  const cardsList = cardsAmount.map((number) => <Card key={number}></Card>);
  console.log(cardsList);
  
  return (
    <div className={styles.center}>
      <div className={styles.grid}>{cardsList}</div>
    </div>
  );
};

export default Cards;
