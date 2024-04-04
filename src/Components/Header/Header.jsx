import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_content}>
          <HeaderLogo />
          <Nav />
        </div>
      </div>
    </header>
  );
}
