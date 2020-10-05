import * as React from 'react';
import {DefaultLayout} from '../components/default-layout';
import {getClient} from '../client';
import {gql} from 'graphql-request';
import {BlogTeaser, BlogTeaserFragments} from '../components/blog-teaser';

const POSTS_PER_PAGE = 10;

const INDEX_PAGE_QUERY = gql`
  query IndexPageQuery($limit: Int!) {
    posts: Blog_listPost(first: $limit) {
      edges {
        node {
          id
          ...BlogTeaser_post
        }
      }
    }
  }

  # Add fragment for teaser
  ${BlogTeaserFragments.post}
`;

export async function getStaticProps() {
  const client = getClient();
  const data = await client.request(INDEX_PAGE_QUERY, {
    limit: POSTS_PER_PAGE,
  });
  return {
    props: data,
  };
}

const Index = (props) => {
  const {posts} = props;
  return (
    <DefaultLayout>
      <h1>
        Headless CMS Blog Starter
      </h1>
      <p>
        Add your content here
      </p>
      {posts && posts.edges.map(({node}) => (
        <BlogTeaser post={node} key={node.id}/>
      ))}
    </DefaultLayout>
  );
};

export default Index;
