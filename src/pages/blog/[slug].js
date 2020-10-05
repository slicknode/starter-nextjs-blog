import * as React from 'react';
import {DefaultLayout} from '../../components/default-layout';
import {gql} from 'graphql-request';
import {getClient} from '../../client';
import {Markdown} from '../../components/markdown';
import styles from './[slug].module.scss';

const BLOG_POST_PAGE_QUERY = gql`
  query BlogPostPageQuery($slug: String!) {
    post: Blog_getPostBySlug(slug: $slug) {
      title
      teaser
      text
      category {
        name
      }
      image {
        url(width: 740)
      }
      createdAt
    }
  }
`

export async function getStaticProps({params}) {
  const client = getClient();
  const data = await client.request(BLOG_POST_PAGE_QUERY, {
    slug: params.slug,
  });
  return {
    props: data,
  };
}

export async function getStaticPaths() {
  const client = getClient();

  let after = null;
  let hasNextPage = true;
  const paths = [];
  while (hasNextPage) {
	  const data = await client.request(
      gql`query BlogPostPathsQuery($after: String){
	      posts: Blog_listPost(first: 300, after: $after) {
		      pageInfo {
			      hasNextPage
			      endCursor
		      }
	        edges {
	          node {
	            slug
	          }
	        }
	      }
	    }`,
      {
        after,
      },
	  );
	  for (let edge of data.posts.edges) {
	  	paths.push({
			  params: {
				  slug: edge.node.slug,
			  },
		  })
	  }
	  hasNextPage = data.posts.pageInfo.hasNextPage;
	  after = data.posts.pageInfo.endCursor;
  }

  return {
    paths,
    fallback: false,
  };
}

const BlogPostPage = (props) => {
  const {post} = props;

  return (
    <DefaultLayout>
      {post.category && (<span className={styles.category}>
        {post.category.name}
      </span>)}
      <span className={styles.date}>
        {new Intl.DateTimeFormat('en-US').format(new Date(post.createdAt))}
      </span>
      <h1>
        {post.title}
      </h1>
      {post.image && (
        <figure>
          <img src={post.image.url} alt={post.title}/>
        </figure>
      )}
      <section>
        <Markdown value={post.text}/>
      </section>
    </DefaultLayout>
  );
};

export default BlogPostPage;
