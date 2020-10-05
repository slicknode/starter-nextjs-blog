import * as React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';
import styles from './default-layout.module.scss';

export const DefaultLayout = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Header/>
        <main className={styles.content}>
          {props.children}
        </main>
        <Footer/>
      </div>
    </div>
  );
};
