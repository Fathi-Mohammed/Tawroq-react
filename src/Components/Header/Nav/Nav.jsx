import ToolBar from "../ToolBar/ToolBar";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Nav.module.scss";
import Logo from "../../../Assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(current=>!current);
  }

  return (
    <>
    <nav className={`${styles.nav} ${openNav ? styles.active : ""}`}>
      <IoClose className={styles.close_btn} onClick={toggleNav}/>
      <NavLinks toggleNav={toggleNav} />
      <ToolBar toggleNav={toggleNav} />
      <div className={styles.side_menu_logo}>
        <img src={Logo} alt="" />
      </div>
    </nav>
    <FaBars className={styles.menu_btn} onClick={toggleNav} />
    {openNav && <div className={styles.overlay} onClick={toggleNav}></div>}
    </>
  )
}
