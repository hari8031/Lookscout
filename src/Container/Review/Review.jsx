import React from "react";
import { images } from "../../constants";

const Review = () => {
  return (
    <>
      <section className="flex justify-center items-center flex-col lg:my-0 md:mx-[32px] md:my-[40px] mx-[16px] my-[32px]">
        <h2 className="lg:hidden block md:text-[32px] font-semibold text-center text-[22px]">
          What Our Customers Say
        </h2>
        <p className="lg:hidden block text-center text-[16px] text-pTextLightColor">
          Organically grow the holistic world view of dis ruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </p>
      </section>
      <section className="lg:mx-[96px]  md:mx-[32px] mx-[16px] my-[40px] lg:my-[64px] bg-bgLightGray lg:flex lg:justify-center">
        <div className="mx-[32px] md:w-[640px] lg:w-[844px] py-[32px] justify lg:flex lg:flex-col lg:items-center">
          <img src={images.logoBlack} alt="" className="" />
          <h5 className=" font-semibold text-[22px] mt-[16px] lg:text-center">
            Thank you for making it painless, pleasant and most of all hassle
            free! I love LookScout. I can't say enough about LookScout. Great
            job, I will definitely be ordering again!
          </h5>
          <div className="flex gap-2 mt-[32px] w-[146px]">
            <img src={images.avatar} alt="" />
            <div>
              <h6 className=" font-semibold text-[15px]">Lisa Smith</h6>
              <span className="  text-[15px]">CEO Company</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
