import React, { useState } from "react";
import { apiCalls } from "../utilities/apiCalls";
import useAuthentication from "./useAuthentication";

export default function useCardsManager() {
  const [cards, setCards] = useState();
  const { user } = useAuthentication();

  const getCards = () => {
    setCards(user.credit_cards);
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
