import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data);
  // console.log(id);
  useEffect(() => {
    const filteredNews = data.filter((news) => news.category_id == id);
    console.log(filteredNews);
  }, [id, data]);

  return <div>CategoryNews</div>;
};

export default CategoryNews;
