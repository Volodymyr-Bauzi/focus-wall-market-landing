import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.hat}>
      <div className={styles.hatContainer}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Next.js logo"
          width={75}
          height={90}
        />
        <div className={styles.frame}>
          <a>Focuswall</a>
          <a>Cube</a>
          <a>Flag</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
