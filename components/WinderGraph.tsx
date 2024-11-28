import Image from 'next/image';
import styles from '@/styles/WinderGraph.module.scss';
const WinderGraph = () => {
  return (
    <div className={styles.winderGraph}>
      <div className={styles.content}>
        <Image
          src="/WinderGraph.png"
          alt="WinderGraph"
          width={712}
          height={638}
        />
        <div className={styles.sizes}>
          <h3>Розмірна сітка віндера:</h3>
          <p>
            <span>XS</span> 400x2000 мм
          </p>
          <p>
            <span>S</span> 650x2200 мм
          </p>
          <p>
            <span>M</span> 700x3400 мм
          </p>
          <p>
            <span>L</span> 820x4700 мм
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinderGraph;
