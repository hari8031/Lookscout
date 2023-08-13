import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className=" bg-bgBlue ">
      <motion.div
        whileInView={{ y: [-100, 100, 0], opacity: [0, 1, 1] }}
        transition={{ duration: 2           }}
        className="flex  flex-col-reverse justify-between items-center pb-[64px]  px-[140px] lg:flex-row lg:gap-[104px]"
      >
        <section className="w-[343px] flex flex-col sm:w-[624px] mt-[32px]   md:mt-[40px]  lg:mt-[80px] ">
          <section>
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Your Supercharged Design Workflow.
            </h1>
            <p className="text-[18px] text-pTextColor mt-[16px] md:mt-[24px]">
              We’ve been told it is not possible to overachieve our customers’
              expectations. We have not reinvented the wheel, we decided to
              build upon it.
            </p>
            <button className=" bg-btnBlue rounded-lg px-[18px] py-[12px] text-[15px] font-semibold text-white mt-[32px]">
              Get Started
            </button>
          </section>
          <section className="mt-[32px] md:mt-[80px]">
            <h6 className=" font-medium text-white">Who supports us</h6>
            <ul className="flex flex-wrap gap-[16px] md:flex-nowrap">
              <img src={images.gitlab} alt="gitlab" />
              <img src={images.slack} alt="slack" />
              <img src={images.netflix} alt="netflix" />
              <img src={images.paypal} alt="paypal" />
            </ul>
          </section>
        </section>
        <section className="lg:mt-[32px] md:mt-[56px] mt-[32px] w-[274px] sm:w-[448px]">
          <img
            src={images.hero}
            alt=""
            className="lg:cover h-[100%] w-[100%]"
          />
        </section>
      </motion.div>
    </header>
  );
};

export default Header;
