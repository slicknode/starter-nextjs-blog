import * as React from 'react';
import {gql} from 'graphql-request';
import styles from './blog-teaser.module.scss';
import Link from 'next/link';

export const BlogTeaser = (props) => {
  const {post} = props;
  return (
    <Link href={'/blog/[slug]'} as={`/blog/${post.slug}`} passHref={true}>
      <a className={styles.teaserLink}>
        <article className={styles.teaser}>
          {post.image && (
            <figure className={styles.image}>
              <img src={post.image.url} alt={post.title}/>
            </figure>
          )}
          <div className={styles.content}>
            <h2 className={styles.title}>
              {post.title}
            </h2>
            <p className={styles.text}>
              {post.teaser}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export const BlogTeaserFragments = {
  post: gql`
    fragment BlogTeaser_post on Blog_Post {
      title
      teaser
      slug
      image {
        url(width: 300, height: 200, resizeMethod: SMART)
      }
    }
  `
}
