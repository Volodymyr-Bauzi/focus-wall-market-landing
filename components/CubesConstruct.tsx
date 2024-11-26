import Image from 'next/image';
import styles from '@/styles/CubesConstruct.module.scss';
import Button from './Button';

const CubesConstruct = () => {
  return (
    <div className={styles.construct}>
      <Image
        src="/WallConstruct.png"
        className={styles.cImg}
        alt="Focus Wall Construct"
        width={1139}
        height={757}
      />
      <div className={styles.cContent}>
        <h2>Конструкція Куба</h2>
        <div className={styles.cBenefits}>
          <div className={`${styles.cBenefit} ${styles.cBenefit1}`}>
            <h2>1</h2>
            <h3>Наповнення</h3>
            <p>
              Брендовані м’які куби виготовленні з щільного поролоному. Що є
              безпечним для дітей та дозволяє створювати велике рекламне поле за
              допомогу виставлення кубів один на одного.
            </p>
          </div>
          <hr />
          <div className={`${styles.cBenefit} ${styles.cBenefit2}`}>
            <h2>2</h2>
            <h3>Зовнішні чохли</h3>
            <p>
              Виготовленні з тканини Оксфорд, котра відштовхує воду та не
              вимагає особливого догляду.
            </p>
          </div>
          <hr />
          <div className={`${styles.cBenefit} ${styles.cBenefit3}`}>
            <h2>3</h2>
            <h3>Брендування</h3>
            <p>
              На рекламному кубі можна розміщувати будь-яке повноколірне
              зображення на усіх 6-ти гранях, що надає максимальної видимості та
              ефективності реклами для вашої компанії чи продукту.
            </p>
          </div>
        </div>
        <Button>Детальніше</Button>
      </div>
    </div>
  );
};

export default CubesConstruct;
