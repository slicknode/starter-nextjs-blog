import * as React from 'react';
import {DefaultLayout} from '../components/default-layout';
import {getClient} from '../client';
import {gql} from 'graphql-request';

const POSTS_PER_PAGE = 10;

const INDEX_PAGE_QUERY = gql`
  query IndexPageQuery($limit: Int!, $skip: Int) {
    posts: Blog_listPost(first: $limit, skip: $skip) {
      edges {
        node {
          title
          teaser
          image {
            url(width: 300, height: 200)
          }
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const client = getClient();
  const data = await client.request(INDEX_PAGE_QUERY, {
    limit: POSTS_PER_PAGE,
    skip: 0,
  });
  return {
    props: data,
  };
}

const Index = (props) => {
  const {posts} = props;
  return (
    <DefaultLayout>
      Hello
      <h1>
        Slicknode Headless CMS Blog Starter
      </h1>
      <p>
        Add your content here
      </p>
      {posts.edges.map(({node}) => (
        <div>{node.title}</div>
      ))}
      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </DefaultLayout>
  );
};

export default Index;
