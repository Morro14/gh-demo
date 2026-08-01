import googleMapsIcon from "root/src/assets/google-map-icon.svg";
import { useTranslation } from "react-i18next";
import Tooltip from "../Tooltip";
import { handleTooltipTouch } from "~/utils/tooltip";

export default function LocationMain() {
  const { t } = useTranslation();

  return (
    <div className="flex md:flex-row flex-col items-center md:justify-center col-span-2 font-sans md:gap-5 gap-2 text">
      <span className="flex gap-2 underline hover:cursor-pointer relative group">
        <Tooltip
          attrs={{ id: "map-loc-tooltip" }}
          styleProps={{ left: 10, top: -60 }}
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
          attrs={{ id: "map-loc-tooltip" }}
          styleProps={{ left: 10, top: -60 }}
          content={t("Link is disabled for the demo")}
        ></Tooltip>
        {t("Open a route guide")}
      </span>
      {/* <label */}
      {/*   className="underline hover:cursor-pointer relative group" */}
      {/*   aria-disabled */}
      {/*   htmlFor="map-loc-tooltip-checkbox" */}
      {/* > */}
      {/*   {t("Transfer")} */}
      {/*   <input */}
      {/*     className="hidden peer" */}
      {/*     id="map-loc-tooltip-checkbox" */}
      {/*     type="checkbox" */}
      {/*   /> */}
      {/*   <Tooltip */}
      {/*     attrs={{ id: "map-loc-tooltip" }} */}
      {/*     styleProps={{ left: 10, top: -60 }} */}
      {/*     content={t("Link is disabled for the demo")} */}
      {/*   ></Tooltip> */}
      {/* </label> */}
      <span
        className="underline hover:cursor-pointer relative group"
        aria-disabled
        onTouchStart={(e) => {
          handleTooltipTouch(e);
        }}
      >
        {t("Transfer")}
        <Tooltip
          attrs={{ id: "map-loc-tooltip" }}
          styleProps={{ left: 10, top: -60 }}
          content={t("Link is disabled for the demo")}
        ></Tooltip>
      </span>
    </div>
  );
}
