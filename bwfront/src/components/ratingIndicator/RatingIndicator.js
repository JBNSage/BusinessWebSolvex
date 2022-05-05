import React from "react";
import "./ratingIndicator.css";

export default function RatingIndicator({ rating }) {
  let rating_indicator = [];

  for (let index = 0; index < 5; index++) {
    if (rating > index) {
      rating_indicator.push(
        <span class="material-icons-outlined col-auto">star</span>
      );
    } else {
      rating_indicator.push(
        <span class="material-icons-outlined col-auto">star_border</span>
      );
    }
  }
  return rating_indicator;
}
