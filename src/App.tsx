import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

import styles from "./components/App.module.css";

import "./assets/css/global.css";
import { Post } from "./components/Post";

export default function App() {
  return (
    <div className="root">
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}
