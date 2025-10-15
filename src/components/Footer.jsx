import React from "react";
import { useDataContext } from "../contexts/DataContext";

export const Footer = () => {
  const { langData } = useDataContext();
  return (
    <div className="bg-footer-bg mt-[138px] pb-[130px] max-sm:mt-[60px] max-sm:pb-[60px]">
      <div className="mx-auto flex max-w-[1141px] min-w-[400px] flex-col justify-center gap-16 max-xl:px-10">
        <h1 className="mt-[85px] max-w-[470px] text-[42px] font-semibold max-md:mt-[30px]">
          {langData.footerSection.mainText}
        </h1>
        <div className="max-md: flex flex-wrap justify-between gap-10">
          <div className="text-xl font-medium">
            <span>👉 </span>
            <a
              href={langData.footerSection.email}
              className="text-email underline"
            >
              {langData.footerSection.email}
            </a>
          </div>
          <div className="flex gap-5">
            <a
              href={langData.footerSection.links[0].link}
              className="text-blog font-medium"
            >
              {langData.footerSection.links[0].name}
            </a>
            <a
              href={langData.footerSection.links[1].link}
              className="text-github font-medium"
            >
              {langData.footerSection.links[1].name}
            </a>
            <a
              href={langData.footerSection.links[2].link}
              className="text-linkedin font-medium"
            >
              {langData.footerSection.links[2].name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
