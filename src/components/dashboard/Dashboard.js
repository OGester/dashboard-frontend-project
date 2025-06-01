import styles from "../../styles/layout/dashboardLayout.module.scss";
//import TopBar from "./top/topBar";
//import SideBar from "./side/sideComponent";
//import AboutMe from "./aboutMe/aboutMeComponent";

export default async function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.topContainer}>
          <p>My Name here</p>
        </div>
        <div className={styles.leftContainer}>
          <p>Side stuff here</p>
        </div>
        <div className={styles.mainContainer}>
          <p>About me here</p>
        </div>
        <div className={styles.statsContainer}>
          <p>stats section here</p>
        </div>
        <div className={styles.bottomContainer}>
          <p>bottom here</p>
        </div>
      </div>
    </div>
  );
}
