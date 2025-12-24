import styles from "./styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.erpLoader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
}
