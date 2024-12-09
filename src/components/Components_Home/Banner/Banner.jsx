import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h1 className={styles.title}>Laeriel</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
