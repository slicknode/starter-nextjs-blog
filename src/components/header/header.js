import styles from './header.module.scss';
import Link from 'next/link';

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li>
          <Link href={'/'} passHref={true}>
            <a>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/blog'} passHref={true}>
            <a>
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
