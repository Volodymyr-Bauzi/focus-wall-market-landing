import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image
          aria-hidden
          src="/logo.svg"
          alt="File icon"
          width={52}
          height={62.56}
        />
        <div className={styles.footerLinks}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Focuswall
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cube
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
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
