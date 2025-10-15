import { useDataContext } from "../contexts/DataContext";

export const Header = () => {
  const { langData } = useDataContext();
  return (
    <nav className="mt-[26px] flex items-center justify-between max-sm:mt-[52px]">
      <div className="bg-logo-background flex h-[63px] w-[63px] items-center justify-center rounded-full">
        <p className="text-logo rotate-30 text-2xl font-semibold">A</p>
      </div>
      <nav className="text-text flex h-[52px] gap-[59px] font-medium max-sm:hidden">
        <div className="flex gap-[82px]">
          <a
            rel="stylesheet"
            href="https://example.com"
            className="flex items-center"
          >
            Skills
          </a>
          <a
            rel="stylesheet"
            href="https://example.com"
            className="flex items-center"
          >
            Projects
          </a>
        </div>
        <a
          rel="stylesheet"
          href={langData.headerSection.hireMe.link}
          className="flex items-center rounded-md border-2 border-indigo-800 bg-white px-8 text-indigo-800"
        >
          {langData.headerSection.hireMe.alt_text}
        </a>
      </nav>
    </nav>
  );
};
