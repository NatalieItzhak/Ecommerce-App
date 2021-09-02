import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo"></div>
        <div className="header__links">
          <a href="/login">Login</a>
          <a href="/">Products</a>
          <a href="/category">Categories</a>
          <a href="/cart">Cart</a>
        </div>
      </div>
    </>
  );
};
