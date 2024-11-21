import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <nav className={`${styles.navbar} ${styles.frame}`}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="Next.js logo"
        width={75}
        height={90}
      />
      <ul>
        <li>
          <a href="#FocusWall">Focuswall</a>
        </li>
        <li>
          <a href="#Cube">Cube</a>
        </li>
        <li>
          <a href="#Flag">Flag</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
