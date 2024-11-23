import useEmblaCarousel from 'embla-carousel-react';
import styles from '../styles/Carousel.module.scss';
import Image from 'next/image';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({loop: true});

  return (
    <div className={styles.carousel} id="Flag">
      <div className={styles.carouselContent}>
        <h2 className={styles.cText}>Основа для конструкції</h2>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            <div className={styles.emblaSlide}>
              <Image src="/flag1.png" alt="flag1" width={260} height={650} />
              <p>Плоска квадратна</p>
            </div>
            <div className={styles.emblaSlide}>
              <Image src="/flag2.png" alt="flag2" width={260} height={650} />
              <p>Хрестоподібна (Люкс)</p>
            </div>
            <div className={styles.emblaSlide}>
              <Image src="/flag3.png" alt="flag3" width={260} height={650} />
              <p>Фасадна універсальна</p>
            </div>
            <div className={styles.emblaSlide}>
              <Image src="/flag4.png" alt="flag4" width={260} height={650} />
              <p>Гвинтова (Бур)</p>
            </div>
            <div className={styles.emblaSlide}>
              <Image src="/flag5.png" alt="flag5" width={260} height={650} />
              <p>Хрестоподібна з підшипником</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
