import styles from '@/styles/Cubes.module.scss';
import Button from './Button';
import Image from 'next/image';

const Cubes = () => {
  return (
    <div className={styles.cubes} id="Cube">
      <div className={styles.cubesText}>
        <h2>02.Куби</h2>
        <div className={styles.paragraph}>
          <p>
            <span>Куби</span> - це є стильний і функціональний акцент для
            будь-якого заходу, який привертає увагу та запам’ятовується.
            Сидіння-куби легко адаптується до будь-якого простору і миттєво
            привертає увагу. Запорукою універсальності та зручності рекламного
            пуфа - є легкість та мобільність. Максимальна універсальність і
            зручність завдяки легкості та мобільності рекламного пуфа. Пуфи Cube
            створені для довготривалого використання з можливістю легкої заміни
            чохла. Використовуйте всю поверхню сидінь та втілюйте в життя свої
            креативні ідеї.
          </p>
          <Button>Замовити</Button>
        </div>
      </div>
      <Image
        className={styles.image}
        src="/Cube.png"
        alt="Cube"
        width={642}
        height={491}
      />
    </div>
  );
};

export default Cubes;
