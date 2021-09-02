import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export const Category = (props) => {
  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = props.match.params.category;

  useEffect(() => {
    const fetchitems = async () => {
      await axios
        .get(`https://fakestoreapi.com/items/category/${category}`)
        .then((response) => {
          setitems(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchitems();
  }, [category]);

  return (
    <>
      {loading ? (
        <Loader type="Oval" color="#000" className="loading_icon"></Loader>
      ) : (
        <>
          <div className="category__header">
            <Link to="/category" className="categories__link">
              ← Categories
            </Link>
            <Link to="/category" className="back-arrow categories__link-mobile">
              ←
            </Link>
            <h1 className="category__title">{category.toUpperCase()}</h1>
          </div>
          <div className="cards-wrap">
            {items.map((item) => {
              return (
                <itemCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  desc={item.description}
                  price={item.price}
                  item={item}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
