import styles from "../../styles/layout/dashboardLayout.module.scss";
import Header from "./header/headerComponent";
//import TopBar from "./top/topBar";
//import SideBar from "./side/sideComponent";
//import AboutMe from "./aboutMe/aboutMeComponent";

export default async function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>Sidebar here</div>
        <div className={styles.about_box}>About me here</div>
        <div className={styles.stats_box}>Stats section here</div>
        <div className={styles.bottom_box}>Bottom here</div>
        <div className={styles.footer}>Footer here</div>
      </div>
    </div>
  );
}
