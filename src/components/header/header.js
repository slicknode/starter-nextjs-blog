import styles from './header.module.scss';
import Link from 'next/link';

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={'/'} passHref={true}>
          <a>
            Home
          </a>
        </Link>
      </div>
    </header>
  );
};
