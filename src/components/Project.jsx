import React from "react";
import { useDataContext } from "../contexts/DataContext";

export const Project = ({ item }) => {
  const { langData } = useDataContext();
  const projectImage = new URL(
    `../assets/imgs/${item.preview}`,
    import.meta.url,
  ).href;

  return (
    <div className="max-md:border-text-lang flex w-[300px] flex-col gap-4 rounded max-md:w-full max-md:gap-2 max-md:border-2 max-md:p-3">
      <img src={projectImage} alt="" />
      <h3 className="text-3xl font-medium">{item.name}</h3>
      <p className="text-sm">{item.description}</p>
      <div className="flex gap-[6px]">
        {item.libraries.map((item, index) => (
          <div
            key={index}
            className="bg-button-hero-bg-others border-button-porject text-button-porject rounded-md border-1 px-[18px] py-[6px] text-sm font-medium"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {item.links.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-button-hero-bg-hire text-base font-medium underline"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
