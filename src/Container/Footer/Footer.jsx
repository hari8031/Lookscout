import React from "react";
import { images } from "../../constants";

const Footer = () => {
  return (
    <footer className=" bg-bgDark text-white">
      <main className="flex flex-col justify-center ">
        <section className="sm:flex sm:flex-wrap px-[16px] md:p-[64px] lg:gap-[164px]">
          <div className="sm:w-[328px] lg:w-[247px]">
            <img src={images.logo} alt="" />
            <p className=" mt-[16px] text-pTextLightColor">
              Generate outside the box thinking with the possibility to targtet
              the low.
            </p>
          </div>
          <div className=" flex md:justify-around  gap-[64px] md:order-last md:gap-0 lg:order-none lg:gap-[164px] sm:mt-[32px] py-[24px] md:mt-0 lg:py-0">
            <div className=" font-semibold sm:w-[328px] lg:w-[91px]">
              <h5 className="mb-[16px]">Resources</h5>
              <div className=" text-pTextLightColor flex flex-col gap-[12px]">
                <h5>Community</h5>
                <h5>Events</h5>
                <h5>Help Center</h5>
                <h5>Partners</h5>
              </div>
            </div>

            <div className=" font-semibold sm:w-[328px] lg:w-[91px]">
              <h5 className=" mb-[16px]">Products</h5>
              <div className=" text-pTextLightColor flex flex-col gap-[12px]">
                <h5>Integrations</h5>
                <h5>Solutions</h5>
                <h5>Features</h5>
                <h5>Enterprise</h5>
              </div>
            </div>
          </div>

          <div className="w-[343px] lg:w-[302px]">
            <h5 className=" text-[16px] font-semibold">
              Get Email Notifications
            </h5>
            <p className=" mt-[16px] text-pTextLightColor">
              Generate outside the box thinking with the possibility to targtet
              the low.
            </p>
            <div className="flex mt-[32px] flex-row w-full ">
              <input
                type="text"
                id="first_name"
                className="w-full bg-gray-800 border border-gray-300 text-sm   block font-medium text-[15px] p-2.5  dark:border-gray-800 dark:placeholder-gray-300 dark:text-black rounded-l-lg"
                placeholder="Enter email..."
                required
              />
              <button className=" bg-btnBlue text-white font-semibold text-[15px] py-[12px] px-[18px] rounded-r-lg md:rounded-none w-[88px]">
                Submit
              </button>
            </div>
          </div>
        </section>

        <section className=" sm:w-[343px] mt-[24px] md:w-full md:flex md:justify-between border-t-[1px] border-pTextLightColor">
          <h5 className=" text-pTextLightColor py-[16px] ">
            © 2023 Lookscout. All Rights Reserved.
          </h5>
          <div className="flex justify-around my-[16px] md:gap-3 ">
            <img src={images.socialFacebook} alt="" />
            <img src={images.socialGoogle} alt="" />
            <img src={images.socialApple} alt="" />
            <img src={images.socialInstagram} alt="" />
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
