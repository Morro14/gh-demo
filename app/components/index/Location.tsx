import googleMapsIcon from "root/src/assets/google-map-icon.svg";
import { useTranslation } from "react-i18next";
import Tooltip from "../Tooltip";

export default function LocationMain() {
  const { t } = useTranslation();
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-center col-span-2 font-sans md:gap-5 gap-2 text">
      <span className="flex gap-2 underline hover:cursor-pointer relative group">
        <Tooltip
          params={{ id: "map-loc-tooltip" }}
          pos={{ x: 10, y: 40 }}
          content={t("Link is disabled for the demo")}
        ></Tooltip>
        <img className="w-3" src={googleMapsIcon} />
        <div>{t("Open in Google Maps")}</div>
      </span>
      <span
        className="underline hover:cursor-pointer relative group"
        aria-disabled
      >
        <Tooltip
          params={{ id: "map-loc-tooltip" }}
          pos={{ x: 10, y: 40 }}
          content={t("Link is disabled for the demo")}
        ></Tooltip>
        {t("Open a route guide")}
      </span>
      <span
        className="underline hover:cursor-pointer relative group"
        aria-disabled
      >
        <Tooltip
          params={{ id: "map-loc-tooltip" }}
          pos={{ x: 10, y: 40 }}
          content={t("Link is disabled for the demo")}
        ></Tooltip>
        {t("Transfer")}
      </span>
    </div>
  );
}
