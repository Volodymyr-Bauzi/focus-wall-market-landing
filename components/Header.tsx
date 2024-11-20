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
          <a href="#Focuswall">Focuswall</a>
          <a href="#Cube">Cube</a>
          <a href="#Flag">Flag</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
