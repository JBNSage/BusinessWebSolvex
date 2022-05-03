import React, { useState } from "react";
import { apiCalls } from "../utilities/apiCalls";

export default function useCardsManager() {
  const [cards, setCards] = useState();

  const getCards = () => {
    apiCalls.getCreditCards().then((response) => {
      if (response.data) {
        setCards(response.data);
      }
    });
  };

  const addCard = (body) => {
    apiCalls.addCreditCard();
    getCards();
  };

  const deleteCard = (cardId) => {
    apiCalls.deleteCreditCard(cardId);
    getCards();
  };

  return { cards, getCards, addCard, deleteCard };
}
