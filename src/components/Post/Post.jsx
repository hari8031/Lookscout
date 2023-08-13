import React from "react";

const Post = ({
  heading,
  description,
  name,
  desiganation,
  date,
  blogImage,
  profileImage,
}) => {
  return (
    <li className=" flex flex-col justify-start px-[32px] mt-[32px] w-[380px] h-[418px] md:h-[554px]">
      <img src={blogImage} alt="" />
      <h5 className="text-2xl font-bold mt-[24px]">{heading}</h5>
      <p className="mt-[16px] text-pTextLightColor">{description}</p>
      <div className="flex items-center justify-between mt-[40px]">
        <div className="flex gap-2">
          <img src={profileImage} alt="" />
          <div>
            <h6 className=" font-medium">{name}</h6>
            <h6 className=" text-pTextLightColor">{desiganation}</h6>
          </div>
        </div>
        <h6 className=" text-pTextLightColor font-medium">{date}</h6>
      </div>
    </li>
  );
};

export default Post;
