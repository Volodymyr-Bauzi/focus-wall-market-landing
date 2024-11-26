import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="Contact">
      <div className={styles.footerContent}>
        <Image
          aria-hidden
          src="/logo.svg"
          alt="File icon"
          width={52}
          height={62.56}
        />
        <div className={styles.footerLinks}>
          <a href="#FocusWall" rel="noopener noreferrer">
            Focuswall
          </a>
          <a href="#Cube" rel="noopener noreferrer">
            Cube
          </a>
          <a href="#Flag" rel="noopener noreferrer">
            Flag
          </a>
        </div>
        <div className={styles.contacts}>
          <p>order@toptrend.com.ua</p>
          <p>+ 380 (67) 314-55-15</p>
          <p>+ 380 (67) 314-55-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
