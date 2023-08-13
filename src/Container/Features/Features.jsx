import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { featureData } from "../../constants";
import { Card } from "../../components";

const Features = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="px-[140px] flex flex-col justify-center items-center mt-[64px] ">
      <h1 className="text-[24px] md:text-[32px] font-bold text-center w-[343px] md:w-[700px]">Redefining Product Features</h1>
      <p className="w-[343px]  md:w-[700px] text-center mt-[16px] sm:[12px]">
        Keeping your eye on the ball while performing a deep dive on the
        start-up mentality to derive convergence on cross-platform integration.
      </p>
      <div className=" flex justify-center items-center mt-[40px]  flex-col-reverse lg:flex-row lg:gap-[124px] lg:mt-[64px]">
        <ul className="grid grid-row-3 md:mt-[0]">
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
        <img
          src={isMediumScreen ? images.featureHero2 : images.featureHero}
          alt=""
          className=""
        />
      </div>
    </section>
  );
};

export default Features;
