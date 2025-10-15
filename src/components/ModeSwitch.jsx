import { useMainContext } from "../contexts/MainContext";
import "../index.css";
import { useDataContext } from "../contexts/DataContext";

export const ModeSwitch = () => {
  const { darkModeHandler, darkMode } = useMainContext();
  const { langData, lang, langHandler } = useDataContext();

  return (
    <div className="font-inter h-[38px] text-[15px] font-bold sm:flex sm:justify-end">
      <div className="flex items-center max-sm:justify-between sm:gap-2">
        <div className="flex gap-1">
          <div
            onClick={darkModeHandler}
            className={darkMode ? "tdnn" : "tdnn day"}
          >
            <div className={darkMode ? "moon" : "moon sun"}></div>
          </div>
          <div className="text-text-mode">
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </div>
        </div>
        <div className="text-text-mode">|</div>
        <div
          onClick={langHandler}
          className="text-text-mode cursor-pointer p-[10px]"
        >
          {lang == "tr" ? (
            <p>
              SWİTCH TO <span className="text-text-lang">ENGLISH</span>
            </p>
          ) : (
            <p>
              <span className="text-text-lang">TÜRKÇE</span>’YE GEÇ
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
