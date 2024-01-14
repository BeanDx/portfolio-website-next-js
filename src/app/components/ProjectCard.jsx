import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "288px",
          width: "360px",
          borderRadius: "65px",
        }}
        className="md:h-72"
      ></div>
      <div className="text-white">
        <h5 className="text-base text-[18px] pt-0 mt-0 font-bold text-white">
          {title}
        </h5>
        <p className="text-base lg:text-lg text-[#ADB7BE] pt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
