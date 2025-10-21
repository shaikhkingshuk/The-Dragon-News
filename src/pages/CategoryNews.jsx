import React from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  console.log(id);
  return <div>CategoryNews</div>;
};

export default CategoryNews;
