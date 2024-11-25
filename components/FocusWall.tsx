import Image from 'next/image';
import styles from '../styles/FocusWall.module.scss';
import Button from './Button';

const FocusWall = () => {
  return (
    <div className={styles.focusWall} id="FocusWall">
      <div className={styles.links}>
        <div className={styles.navContent}>
          <a className={`${styles.link} ${styles.active}`}>01.Фокусволи</a>
          <a>02.Куби</a>
          <a href="#Flag">03.Віндери</a>
          <a href="#Contact">04.Підтримка</a>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textSide}>
          <p>
            <span>Focus Wall</span> (текстильний лайтбокс) - це втілення
            передових технологій та комплекс рішень для ефективної візуальної
            комунікації та оформлення простору. Вироби ідеально поєднують
            функціональність із сучасним дизайном, що робить їх придатними для
            широкого спектру застосувань, від рекламних до декоративних цілей.
          </p>
          <Button>Замовити</Button>
        </div>
        <Image
          className={styles.image}
          src="/image 1.png"
          alt="Next.js logo"
          width={642}
          height={491}
        />
      </div>
    </div>
  );
};

export default FocusWall;
