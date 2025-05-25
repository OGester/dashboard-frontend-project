import styles from "../../styles/layout/dashboardLayout.module.scss";

export default async function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.topContainer}>tobar here</div>
      <div className={styles.leftContainer}>sidebar here</div>
      <div className={styles.mainContainer}>main section here</div>
      <div className={styles.statsContainer}>stats section here</div>
      <div className={styles.bottomContainer}>bottom here</div>
    </div>
  );
}
