import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../Assets/images/logo.png";
import styles from "./styles.module.scss";


export default function HeaderLogo() {
  return (
    <Link className={styles.logo} to="/">
    <img src={Logo} alt="" />
    </Link>
  )
}
