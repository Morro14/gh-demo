import { LANGUAGES } from "~/vars";
import { useLocation, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import langIcon from "src/assets/globe-icon.svg";
import Tooltip from "./Tooltip";

export default function LangSelect() {
  const { i18n } = useTranslation();
  const languageLabels = { en: "en", ru: "ru" };
  // const nav = useNavigate();
  const params = useParams();
  const loc = useLocation();
  const handleChange = (e) => {
    // const pathWithoutLang = loc.pathname.split("/").toSpliced(1, 1).join("/");
    // window.location.assign(`/${e.target.value}${pathWithoutLang}${loc.search}`);
  };
  return (
    <div className="w-35 flex justify-end items-center gap-1 relative group">
      <Tooltip
        styleProps={{ left: -10, top: 28 }}
        content="Localization is supported for the real version"
      ></Tooltip>
      <img src={langIcon} className="w-5 h-5" />
      <select
        name="lang-select"
        onChange={handleChange}
        defaultValue={i18n.language || params.lang}
        className=""
      >
        {LANGUAGES.map((lang) => {
          return (
            <option key={"opt-lang-" + lang} value={lang}>
              {languageLabels[lang]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
