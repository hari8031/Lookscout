import React from "react";
import { aboutData } from "../../constants";
import Card from "../../components/Card/Card";

const About = () => {
  return (
    <section className=" flex flex-col justify-center items-center mt-[64px] ">
      <h1 className="text-[24px] md:text-[32px] font-bold text-center w-[343px] md:w-[700px]">
        Messaging for all
      </h1>
      <p className="w-[343px]  md:w-[700px] lg:w-[800px] text-center mt-[16px] sm:[12px]">
        User generated content in real-time will have multiple touchpoints for
        offshoring.
      </p>
      <div className=" flex justify-center items-center mt-[40px]  flex-col-reverse lg:flex-row lg:gap-[124px] lg:mt-0">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutData.data.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              heading={item.heading}
              description={item.description}
              link={item.link}
              card={false}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
