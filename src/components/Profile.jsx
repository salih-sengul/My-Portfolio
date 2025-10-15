import React from "react";
import { useDataContext } from "../contexts/DataContext";

export const Profile = () => {
  const { langData } = useDataContext();
  return (
    <div className="mt-[42px] flex flex-col gap-12 border-t-2 border-[#BAB2E7]">
      <h2 className="mt-10 text-5xl font-semibold max-md:text-center">
        {langData.profileSection.mainTitle}
      </h2>
      <div className="gap-14 md:flex">
        <div className="flex max-w-[412px] flex-col gap-6 max-md:mx-auto">
          <h3 className="text-3xl font-medium max-md:text-center">
            {langData.profileSection.mainTitle}
          </h3>
          <div>
            {langData.profileSection.profile.map((item, index) => (
              <div key={index} className="flex">
                <p className="text-profile w-[156px] font-semibold">
                  {item.title}
                </p>
                <p className="text-profile w-[232px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex max-w-[577px] flex-col gap-4 max-md:mx-auto max-md:my-10">
          <h3 className="text-3xl font-medium max-md:text-center">
            {langData.profileSection.secondTitle}
          </h3>
          <div className="flex flex-col gap-2">
            <p>{langData.profileSection.aboutMeText1}</p>
            <p>{langData.profileSection.aboutMeText2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
