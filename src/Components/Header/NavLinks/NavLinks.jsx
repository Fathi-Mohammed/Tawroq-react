import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.scss";
import { useTranslation } from "react-i18next";

export default function NavLinks({ toggleNav }) {
  const { t } = useTranslation();

  const navLinks = [
    {
      name: t("Home"),
      link: "/",
    },
    {
      name: t("About"),
      link: "/about",
    },
    {
      name: t("Services"),
      link: "/services",
    },
    {
      name: t("Partners"),
      link: "/partners",
    },
    {
      name: t("Contact_Us"),
      link: "/contact",
    },
    {
      name: t("Consultation_Request"),
      link: "/consultationRequest",
    },
  ];

  const renderNavLinks = navLinks.map((link , i) => (
    <li className={styles.navLink} key={i}>
      <NavLink
        className={styles.link}
        onClick={toggleNav}
        to={link.link}>
        {link.name}
      </NavLink>
    </li>
  ));

  return <ul className={styles.navLinks}>{renderNavLinks}</ul>;
}
