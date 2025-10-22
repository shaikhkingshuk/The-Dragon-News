import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import RightAside from "../components/homelayout/RightAside";
import LeftAside from "../components/homelayout/LeftAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-[10px]">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-[10px]">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className=" grid grid-cols-12 w-11/12 mx-auto my-[20px]">
        <aside className="col-span-3 h-fit sticky top-2">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 h-fit sticky top-2">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
