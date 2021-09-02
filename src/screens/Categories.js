import React from "react";

export const Categories = () => {
  return (
    <>
      <h1>Categories</h1>
      <div className="cards-wrap">
        <div className="card category-card">
          <a href="/category/men's%20clothing">
            <img
              src="https://www.kindpng.com/picc/m/208-2081517_woman-cartoon-villain-image-pattern-png-download-man.png"
              alt="product"
              className="card__img"
              width="300px"
              height="300px"
            />
          </a>
          <a href="/category/men's%20clothing">
            <h2 className="card__title">Men Clothing</h2>
          </a>
        </div>
        <div className="card category-card">
          <a href="/category/jewelery">
            <img
              src="https://www.pngrepo.com/png/13619/512/diamond-ring.png"
              alt="product"
              className="card__img"
              width="300px"
              height="300px"
            />
          </a>
          <a href="/category/jewelery">
            <h2 className="card__title">Jewelry</h2>
          </a>
        </div>
        <div className="card category-card">
          <a href="/category/electronics">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAC1CAMAAACtbCCJAAAAeFBMVEX39/czMzP9/f36+vomJiaYmJgsLCz09PSQkJAwMDAqKipCQkJ+fn4dHR0iIiK0tLTMzMxPT08XFxeenp7d3d1JSUmtra3ExMRbW1vr6+ttbW2mpqYWFhZZWVnGxsY6Ojp2dnYODg6GhoZkZGTk5OR6enpvb2/T09MuRaNuAAAC4klEQVR4nO3d/VKyQBhAcWURA0PLtLLv7Ov+7/CdnGbefw5aDCttnN8NKCdYnoVmHI0kSZIkSd8WshSF2FHOLibpuV1lUatMr+/yBM2Xk5hdwn0+TtPdIl6X8LDs+/DaKu/jZckmqZ4s4/Ix3qqbnVZ9H15b5cws4ChZyiId5dGyzBejaSpGZ/XxskSdjjoVzELMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzIKOmyUdH0fLUryfpOOtOFaWcVGlY1fF35pnZkFRs5ykm2UdMcvlvO/Da6t6ijhTTKuy7+Nr6fks3tkyyq6WKYYpi+dJ1AE0W20fiw41H0qnn3LzEHksD92OoFcNi1W17fZzIl5BETTe2spZOruu7mXrppUq36T1B+7UJm9aWuqr4Wb52vTj2RL31vGrZReNZ0txPeAsL4136LKc9v3t+vPYPBvWq6EuLmHVuLSMx/PLoV5F2WLPzrOIubf71bLtnucUMR+Q/G7Nw9zuKnodZpfQPMzt1tyBDnR7hrlPQx3ossnes6Uc6EC3Z5jbKTZ9f8M+HFhaPheXIZ4uezZEA76KwqY49FS4Tug/ALqSvRx+55SvBtYlZO/feOVUVoPqErLX+wMLy1eX5W1qj6fb2T2GX23r/ffm/+azy01I7tH9T01P3k5vZssfvMou5/X5+9Pbn94ghcVznldF+TNFldc3f3mRCR/r81bWf3vfGFrr+5tLkiRJ0nD8A15KdXpndJzmAAAAAElFTkSuQmCC"
              alt="product"
              className="card__img"
              width="300px"
              height="300px"
            />
          </a>
          <a href="/category/electronics">
            <h2 className="card__title">Electronics</h2>
          </a>
        </div>
        <div className="card category-card">
          <a href="/category/women's%20clothing">
            <img
              src="https://p.kindpng.com/picc/s/69-690449_woman-shopping-icon-png-transparent-png.png"
              alt="product"
              className="card__img"
              width="300px"
              height="300px"
            />
          </a>
          <a href="/category/women's%20clothing">
            <h2 className="card__title">Women Clothing</h2>
          </a>
        </div>
      </div>
    </>
  );
};
