import Image from 'next/image';
import styles from '@/styles/WallConstruct.module.scss';
import Button from './Button';

const Construct = () => {
  return (
    <div className={styles.construct}>
      <Image
        src="/Construct.png"
        className={styles.cImg}
        alt="Focus Wall Construct"
        width={1139}
        height={757}
      />
      <div className={styles.cContent}>
        <h2>Конструкція Focus Wall</h2>
        <div className={styles.cBenefits}>
          <div className={`${styles.cBenefit} ${styles.cBenefit1}`}>
            <h2>1</h2>
            <h3>Алюмінієва рама</h3>
            <p>
              Рами виготовлені з високоякісного легкого алюмінію,  є
              довговічними, а також й естетично привабливі. Легкість рами сприяє
              простоті монтажу та транспортування, а також дозволяє легко
              оновлювати текстильні постери, що ідеально підходить для частих
              маркетингових кампаній.
            </p>
          </div>
          <hr />
          <div className={`${styles.cBenefit} ${styles.cBenefit2}`}>
            <h2>2</h2>
            <h3>Текстильний постер</h3>
            <p>
              Виготовлені з екологічно чистих матеріалів, тканинні постери
              характеризуються високою якістю зображення та відсутністю
              неприємних запахів, що робить їх ідеальними для внутрішнього
              використання. Зображення на текстилі виглядає яскраво, природно та
              реалістично.
            </p>
          </div>
          <hr />
          <div className={`${styles.cBenefit} ${styles.cBenefit3}`}>
            <h2>3</h2>
            <h3>LED-освітлення</h3>
            <p>
              Новітні технології світлодіодного освітлення забезпечують
              рівномірне світло, що підкреслює якість зображення і зменшує
              енергоспоживання.
            </p>
          </div>
        </div>
        <Button>Детальніше</Button>
      </div>
    </div>
  );
};

export default Construct;
