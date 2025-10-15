import { useDataContext } from "../contexts/DataContext";
import { Project } from "./Project";

export const Projects = () => {
  const { langData } = useDataContext();
  console.log(langData.projectsSection);
  return (
    <div className="mt-[42px] flex flex-col gap-9 border-t-2 border-[#BAB2E7] max-md:items-center">
      <h2 className="mt-10 text-5xl font-semibold">
        {langData.projectsSection.title}
      </h2>
      <div className="max-md: flex flex-wrap justify-between gap-15 max-md:justify-center">
        {langData.projectsSection.projects.map((item, index) => (
          <Project key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
