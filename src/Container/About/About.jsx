import React from "react";
import { aboutData } from "../../constants";
import Card from "../../components/Card/Card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex justify-center items-center flex-col p-[40px]">
      <div>
        <h1 className="text-3xl font-bold text-center ">Messaging for all</h1>
        <p className="mt-[16px] text-pTextLightColor text-base text-center">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>
      <div className="flex">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
