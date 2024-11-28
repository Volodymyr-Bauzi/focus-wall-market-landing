import styles from '@/styles/Winder.module.scss';
import Button from './Button';
import Image from 'next/image';

const Winder = () => {
  return (
    <div className={styles.winder} id="Cube">
      <div className={styles.winderText}>
        <h2>03.Віндер</h2>
        <div className={styles.paragraph}>
          <p>
            <span>Віндери</span> - зручний спосіб реклами для привернення уваги
            ваших клієнтів до бренду та подій. Це мобільні рекламні конструкції
            у вигляді прапорів на стійкому флагштоку. Вони відрізняються
            легкістю та зручністю у використанні.
          </p>
          <Button>Замовити</Button>
        </div>
      </div>
      <Image
        className={styles.image}
        src="/Winder.png"
        alt="Winder"
        width={642}
        height={444}
      />
    </div>
  );
};

export default Winder;
