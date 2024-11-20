import Header from './Header';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.textPart}>
          <div className={styles.text}>
            <p>Текстильні лайтбокси </p>
            <p>Рекламні куби </p>
            <p>Віндери, прапори</p>
          </div>
          <button>Замовляй прямо зараз!</button>
        </div>
        <div className={styles.backgroundFP}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
