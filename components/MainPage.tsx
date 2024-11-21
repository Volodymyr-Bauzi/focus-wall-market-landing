import Header from './Header';
import styles from '../styles/MainPage.module.css';
import Image from 'next/image';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
        <Header />

        <div className={styles.content}>
          <div className={styles.text}>
            <p>Текстильні лайтбокси </p>
            <p>Рекламні куби </p>
            <p>Віндери, прапори</p>
            <button>Замовляй прямо зараз!</button>
          </div>
          <div className={styles.leftSection}></div>
          <div className={styles.rightSection}></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
