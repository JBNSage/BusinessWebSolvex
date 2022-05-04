import React from "react";
import { Link } from "react-router-dom";
import { useCategoriesManager } from "../hooks";
export default function Home() {
  const { categories, getCategories } = useCategoriesManager();

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="home_categories_container row align-items-end justify-content-center  ">
      {categories &&
        categories.map((category) => (
          <Link
            to={`./products?category=${category.id}`}
            className="home_category col-3 d-flex justify-content-center"
          >
            <figure>
              <img
                className="home_category_picture"
                src={category.picture}
                alt={category.name}
              />
              <figcaption className="text-uppercase text-center fs-6 fw-bold">
                {category.name}
              </figcaption>
            </figure>
          </Link>
        ))}
    </div>
  );
}
