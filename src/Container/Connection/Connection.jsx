import React from "react";
import { images } from "../../constants";

const Connection = () => {
  return (
    <section className=" flex flex-col items-center mx-[32px] mt-[64px]">
      <h1 className="text-[24px] font-bold">Proud to Be Used By</h1>
      <p className="text-[16px] text-pTextLightColor mt-[12px] lg:w-[800px] text-center">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state of the
        art customer service.
      </p>
      <div className="md:flex my-[64px] justify-center items-center flex-wrap">
        <img src={images.LogoTheverge} alt="" className="mt-[32px] mx-[32px] md:mt-0" />
        <img src={images.LogoSlack} alt="" className="mt-[32px] mx-[32px] md:mt-0" />
        <img src={images.LogoGoogle} alt="" className="mt-[32px] mx-[32px] md:mt-0" />
        <img src={images.LogoPaypal} alt="" className="mt-[32px] mx-[32px] md:mt-0" />
        <img src={images.LogoPintrest} alt="" className="mt-[32px] mx-[32px] md:mt-0" />
        <img
          src={images.LogoMailchimp}
          alt=""
          className="mt-[32px] mx-[32px] md:mt-0"
        />
      </div>
    </section>
  );
};

export default Connection;
