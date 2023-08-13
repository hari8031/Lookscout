import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { featureData } from "../../constants";
import { Card } from "../../components";

const Features = () => {
  return (
    <div className=" bg-bgDark mt-[64px] pb-[64px]">
      <section className="flex flex-col justify-center items-center text-white">
        <div className=" flex justify-center items-center flex-col mt-[64px] lg:flex-row">
          <img
            src={images.featureHero2}
            alt=""
            className="w-[343px] md:w-[743px]"
          />
          <ul className=" md:mt-[0]">
            {featureData.data.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                heading={item.heading}
                description={item.description}
                link={item.link}
                card={true}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Features;
