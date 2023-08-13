import React, { useEffect, useState } from "react";
import { images } from "../../constants";

const Contact = () => {
  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    const updatePlaceHolder = () => {
      const screenSize = window.innerWidth;

      if (screenSize <= 768) {
        setPlaceholder("Your e-mail...");
      } else {
        setPlaceholder("Enter your email");
      }
    };
    updatePlaceHolder();
    window.addEventListener("resize", updatePlaceHolder);

    return () => {
      window.removeEventListener("resize", updatePlaceHolder);
    };
  }, []);

  console.log(placeholder);
  return (
    <section className="flex justify-center items-center flex-col px-[16px] mb-[64px]">
      <h6 className=" text-bgBlue font-semibold">1% OF THE INDUSTRY</h6>
      <h4 className=" font-semibold text-[28px] text-center mt-[8px] w-[342px] md:w-[730px]">
        Welcome to your new digital reality that will rock your world truly at
        all throughout.
      </h4>
      <div className="flex mt-[32px] flex-col md:flex-row">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-sm rounded md:rounded-none  w-[311px] block font-medium text-[15px] p-2.5  dark:border-gray-200 dark:placeholder-gray-400 dark:text-black md:w-[424px] md:rounded-l-lg"
          placeholder={placeholder}
          required
        />
        <button className=" bg-btnBlue text-white font-semibold text-[15px] py-[12px] px-[18px] rounded md:rounded-r-lg md:rounded-none w-[311px] mt-[16px] md:mt-0 md:w-[88px]">
          Submit
        </button>
      </div>
      <div className="flex flex-wrap mx-[24px] w-[300px] md:w-[424px] md:justify-center">
        <div className="flex gap-2 mt-[16px] w-[125px]">
          <img src={images.check} alt="" className="w-[12px]"/>
          <h5 className=" font-semibold text-[15px]">Fully Secure</h5>
        </div>
        <div className="flex gap-2 mt-[16px] w-[125px]">
          <img src={images.check} alt="" className="w-[12px]"/>
          <h5 className=" font-semibold text-[15px]">24/7 Support</h5>
        </div>
        <div className="flex gap-2 mt-[16px] w-[125px]">
          <img src={images.check} alt="" className="w-[12px]"/>
          <h5 className=" font-semibold text-[15px]">Done Deal</h5>
        </div>
      </div>
    </section>
  );
};

export default Contact;
