import React, { useEffect, useState } from "react";
import { data } from "../../constants";
import { Post } from "../../components";

const Blog = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 1024);
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const selectedData = isSmallScreen
    ? data.dataSm
    : isMediumScreen
    ? data.dataMd
    : data.dataLg;
  return (
    <>
      <section className=" flex flex-col justify-center items-center mx-[32px]">
        <h1 className="text-[32px] font-bold">Latest Blog Posts</h1>
        <p className="text-[16px] text-pTextLightColor font-normal text-center mt-[12px] lg:w-[800px]">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
      </section>
      <ul className="flex flex-col md:flex-row justify-center items-center md:my-[64px] ">
        {selectedData.map((item, index) => (
          <Post
            heading={item.heading}
            description={item.description}
            name={item.name}
            desiganation={item.desiganation}
            date={item.date}
            blogImage={item.blogImage}
            key={index}
            profileImage={item.profileImage}
          />
        ))}
      </ul>
    </>
  );
};

export default Blog;
