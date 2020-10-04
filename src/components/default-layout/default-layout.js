import * as React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';

export const DefaultLayout = (props) => {
  return (
    <div>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </div>
  );
};
