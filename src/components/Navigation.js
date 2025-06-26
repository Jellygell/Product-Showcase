import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          ProductStore
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;