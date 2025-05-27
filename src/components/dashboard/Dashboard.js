import styles from "../../styles/layout/dashboardLayout.module.scss";
import TopBar from "./top/topBar";
import SideBar from "./side/sideComponent";
import AboutMe from "./aboutMe/aboutMeComponent";

export default async function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.grid}>
        <div className={styles.topContainer}>
          <TopBar />
        </div>
        <div className={styles.leftContainer}>
          <SideBar />
        </div>
        <div className={styles.mainContainer}>
          <AboutMe />
        </div>
        <div className={styles.statsContainer}>stats section here</div>
        <div className={styles.bottomContainer}>bottom here</div>
      </div>
    </div>
  );
}
