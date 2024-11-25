import styles from '@/styles/Button.module.scss';

interface ButtonProps {
  width?: number;
  fontSize?: number;
  fontWeight?: number;
  padding?: string;
  mt?: string;
  borderColor?: string;
  children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  children,
  borderColor = '#bbe73e',
  padding = '1.1rem',
  fontSize = 24,
  fontWeight = 700,
  width = 233,
  mt,
}) => {
  return (
    <button
      style={{
        borderColor: borderColor,
        padding: padding,
        fontSize: fontSize,
        fontWeight: fontWeight,
        width: width,
        marginTop: mt,
      }}
      className={styles.defaultButton}
    >
      {children}
    </button>
  );
};

export default Button;
