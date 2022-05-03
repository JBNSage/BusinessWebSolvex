import React from "react";
import { Link } from "react-router-dom";
import { useCategoriesManager } from "../hooks";
export default function Home() {
  const { categories, getCategories } = useCategoriesManager();

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="home_categories_container row align-items-end justify-content-around">
      {categories && (
        <>
          <Link
            to={`./products?category=${categories[0].id}`}
            className="home_category col-auto d-flex justify-content-center"
          >
            <figure>
              <img
                className="home_category_picture"
                src={categories[0].picture}
                alt={categories[0].name}
              />
              <figcaption className="text-uppercase text-center fw-bold">
                {categories[0].name}
              </figcaption>
            </figure>
          </Link>

          <Link
            to={`./products?category=${categories[1].id}`}
            className="home_category col-auto d-flex justify-content-center"
          >
            <figure>
              <img
                className="home_category_picture"
                src={categories[1].picture}
                alt={categories[1].name}
              />
              <figcaption className="text-uppercase text-center fw-bold">
                {categories[1].name}
              </figcaption>
            </figure>
          </Link>
          <Link
            to={`./products?category=${categories[2].id}`}
            className="home_category col-auto d-flex justify-content-center"
          >
            <figure>
              <img
                className="home_category_picture"
                src={categories[2].picture}
                alt={categories[2].name}
              />
              <figcaption className="text-uppercase text-center fw-bold">
                {categories[2].name}
              </figcaption>
            </figure>
          </Link>
        </>
      )}
    </div>
  );
}
