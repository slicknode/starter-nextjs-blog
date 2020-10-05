import * as React from 'react';
import styles from './customize-info.module.scss';

export const CustomizeInfo = (props) => {
  return (
    <div>
      <h3>Customize Blog</h3>
      <ul className={styles.customizeList}>
        <li>
          <h4>
            Manage Content
          </h4>
          <p>
            Manage the content, add blog posts and invite your team members in the Slicknode Console.
          </p>
          <a href="https://slicknode.com/docs/data-modeling/introduction/" target="_blank">
            Open Console
          </a>
        </li>
        <li>
          <h4>
            Change Data Model
          </h4>
          <p>
            The data model of your content lives under `modules/`. Learn how to 
            model your content with Slicknode.
          </p>
          <a href="https://slicknode.com/docs/data-modeling/introduction/" target="_blank">
            Open Docs
          </a>
        </li>
      </ul>
    </div>
  );
};
