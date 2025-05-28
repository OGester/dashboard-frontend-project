import styles from "../../../styles/layout/topComponent/topBar.module.scss";

export default function TopBar() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.circles}></div>
      <div className={styles.myName}></div>
    </div>
  );
}
