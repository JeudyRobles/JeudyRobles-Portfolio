import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import "./UpdateNotice.css";

const STORAGE_KEY = "update-notice-dismissed";

function wasDismissed() {
  // Don't render the notice in the prerendered HTML served to crawlers.
  if (/HeadlessChrome|prerender/i.test(navigator.userAgent)) return true;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export default function UpdateNotice() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(() => !wasDismissed());
  const buttonRef = useRef(null);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable: notice simply shows again next visit */
    }
  };

  useEffect(() => {
    if (!open) return undefined;
    buttonRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="UpdateNotice__Overlay"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div
        className="UpdateNotice"
        role="dialog"
        aria-modal="true"
        aria-labelledby="update-notice-title"
        aria-describedby="update-notice-text"
      >
        <button
          type="button"
          className="UpdateNotice__Close"
          aria-label={t("notice.close")}
          onClick={close}
        >
          &times;
        </button>
        <span className="UpdateNotice__Badge">{t("notice.badge")}</span>
        <h3 id="update-notice-title">{t("notice.title")}</h3>
        <p id="update-notice-text" className="UpdateNotice__Text">
          {t("notice.text")}
        </p>
        <button
          type="button"
          ref={buttonRef}
          className="UpdateNotice__Button"
          onClick={close}
        >
          {t("notice.button")}
        </button>
      </div>
    </div>
  );
}
