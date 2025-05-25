import styles from "../../styles/layout/dashboardLayout.module.scss";

export default async function Dashboard() {
  return (
    <div className={styles.grid}>
      <div className={styles.topContainer}>top-bar here</div>
      <div className={styles.leftContainer}>side-bar here</div>
      <div className={styles.mainContainer}>main section here</div>
      <div className={styles.statsContainer}>stats section here</div>
      <div className={styles.bottomContainer}>bottom here</div>
    </div>
  );
}

//<div className={styles.dashboardContainer}></div>
