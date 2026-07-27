import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const EMAIL = import.meta.env.VITE_EMAIL_CONTACT;
  const BUSINESS_LINK = import.meta.env.VITE_BUSINESS_LINK;
  return (
    <div className="h-32 border-t border-gray-line mt-40 mb-10">
      <div className="index-container-1 mx-auto">
        <div className="flex flex-col font-sans mt-4 text-gray-warm-mid">
          <span className="text-base text-gray-warm-mid font-medium">
            {t("A demo page for a guest-house")}
          </span>
          <span className="text-sm font-medium text-gray-warm-mid">
            {t("made by Ivan Fomin")}
          </span>
          <span className="mt-4">
            {`contact via `} <b>{EMAIL}</b>
          </span>
          <div>
            <span>{`more info `}</span>
            <a className="underline cursor-pointer" href={BUSINESS_LINK}>
              <b>{t("here")}</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
