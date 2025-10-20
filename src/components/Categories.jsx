import React, { use } from "react";

const categoryPromise = fetch("/categories.json").then((data) => data.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1>All categories ( {categories.length} )</h1>
    </div>
  );
};

export default Categories;
