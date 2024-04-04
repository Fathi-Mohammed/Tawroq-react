import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookie from "cookie-universal";
import styles from "./ToolBar.module.scss";
import Button from "../../Button/Button";

export default function ToolBar({ toggleNav }) {
  const cookies = Cookie();

  const initialLang = cookies.get("i18next") || "en";
  const {t,i18n: {changeLanguage}} = useTranslation();
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    changeLanguage(lang);
    cookies.set("i18next", lang);
  }, [lang]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    toggleNav();
  };

  return (
    <ul className={styles.toolBar}>
      <li className={styles.tololBar_item}>
        <Button headerLink loginButton>{t("Login")}</Button>
      </li>
      <li className={styles.tololBar_item}>
        <Button headerLink>{t("Register")}</Button>
      </li>
      <li className={styles.tololBar_item}>
        <Button headerLink langBtn onClick={toggleLanguage}>
          {lang === "en" ? "ع" : "En"}
        </Button>
      </li>
    </ul>
  );
}
