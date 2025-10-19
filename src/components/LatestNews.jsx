import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-base-200 flex flex-row items-center gap-5">
      <p className="bg-secondary px-[5px] py-[3px]">Latest</p>
      <Marquee>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta
        ipsa dolorem distinctio. Aspernatur inventore, eius id explicabo
        adipisci distinctio rerum, impedit facere maxime veritatis itaque harum
        dolor neque modi?
      </Marquee>
    </div>
  );
};

export default LatestNews;
