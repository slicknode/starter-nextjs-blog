import * as React from 'react';
import styles from './footer.module.scss';

export const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      Slicknode Quicklinks:
      <ul className={styles.menu}>
        <li>
          <a href="https://slicknode.com/docs/" target="_blank">Docs</a>
        </li>
        <li>
          <a href="https://console.slicknode.com/" target="_blank">Admin</a>
        </li>
        <li>
          <a href="https://slicknode.com/" target="_blank">Website</a>
        </li>
        <li>
          <a href="https://slicknode.com/slack" target="_blank">Slack Channel</a>
        </li>
      </ul>
    </footer>
  );
};
