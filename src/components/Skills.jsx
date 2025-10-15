import React from "react";
import { useMainContext } from "../contexts/MainContext";
import { useDataContext } from "../contexts/DataContext";

export const Skills = () => {
  const { langData } = useDataContext();

  return (
    <div className="mt-[124px] flex flex-col gap-[34px] max-md:text-center">
      <h2 className="text-5xl font-semibold max-md:text-center">
        {langData.skillsSection.title}
      </h2>
      <div className="flex-wrap justify-between md:flex">
        {langData.skillsSection.skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-7 max-md:my-5 md:max-w-[300px]"
          >
            <h3 className="text-3xl font-medium">{item.name}</h3>
            <p className="text-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
