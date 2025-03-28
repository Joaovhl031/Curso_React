import styles from './styles.module.css';

type HeadingProp = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProp) {
  return <h1 className={styles.heading}>{children}</h1>;
}
