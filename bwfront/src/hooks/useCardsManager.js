import React, { useState } from "react";
import { apiCalls } from "../utilities/apiCalls";
import useAuthentication from "./useAuthentication";

export default function useCardsManager() {
  const [cards, setCards] = useState();
  const { user } = useAuthentication();

  const getCards = () => {
    apiCalls.getCreditCards(user.id).then((response) => {
      if (response.data) {
        setCards(response.data);
      }
    });
  };

  const addCard = async (body) => {
    await apiCalls.addCreditCard(body);
    getCards();
  };

  const deleteCard = async (cardId) => {
    await apiCalls.deleteCreditCard(cardId);
    getCards();
  };
  const editCard = async (cardId, body) => {
    await apiCalls.editCreditCard(cardId, body);
    getCards();
  };

  return { cards, getCards, addCard, deleteCard, editCard };
}
