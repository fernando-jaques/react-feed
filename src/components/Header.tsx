import style from "./Header.module.css";

import logo from "../ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="Logo" />

      <h2>Feed</h2>
    </header>
  );
}
