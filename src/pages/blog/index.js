import * as React from 'react';
import {DefaultLayout} from '../../components/default-layout';
import {getClient} from '../../client';
import {gql} from 'graphql-request';
import {BlogTeaser, BlogTeaserFragments} from '../../components/blog-teaser';

const POSTS_PER_PAGE = 10;

const BLOG_PAGE_QUERY = gql`
  query BlogPageQuery($limit: Int!) {
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

export async function getStaticProps(context) {
  const client = getClient(context);
  const data = await client.request(BLOG_PAGE_QUERY, {
    limit: POSTS_PER_PAGE,
  });
  return {
    props: data,
    revalidate: 1, // Refetch content every sec
  };
}

const Index = (props) => {
  const {posts} = props;
  return (
    <DefaultLayout>
      <h1>
        Recent Posts
      </h1>
      {posts && posts.edges && posts.edges.length && posts.edges.map(({node}) => (
        <BlogTeaser post={node} key={node.id}/>
      )) || (
        <p>
          There are no posts yet, add some in the <a href="https://console.slicknode.com">Slicknode Console</a>.
        </p>
      )}
    </DefaultLayout>
  );
};

export default Index;
