import Header from './Header';
import styles from '../styles/MainPage.module.scss';
import Image from 'next/image';
import Button from './Button';

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
            <Button
              borderColor="white"
              fontSize={16}
              fontWeight={400}
              width={276}
              padding="0.9rem"
              mt="9.4rem"
            >
              Замовляй прямо зараз!
            </Button>
          </div>
          <div className={styles.leftSection}></div>
          <div className={styles.rightSection}></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
