import styles from './StarsBackground.module.css';

export default function StarsBackground() {
    return (
        <div className={styles.container}>
            <div className={styles.aurora} />
            <div className={`${styles.orb} ${styles.orb1}`} />
            <div className={`${styles.orb} ${styles.orb2}`} />
            <div className={`${styles.orb} ${styles.orb3}`} />
            <div className={styles.grid} />
        </div>
    );
}
