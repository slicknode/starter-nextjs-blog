import * as React from 'react';
import {DefaultLayout} from '../components/default-layout';
import {getClient} from '../client';
import {gql} from 'graphql-request';
import {BlogTeaser, BlogTeaserFragments} from '../components/blog-teaser';
import {CustomizeInfo} from '../components/customize-info';

const POSTS_PER_PAGE = 3;

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
    revalidate: 1, // Refetch content every sec
  };
}

const Index = (props) => {
  const {posts} = props;
  return (
    <DefaultLayout>
      <h1>
        Headless CMS Blog Starter
      </h1>
      <div>
        Congratulations, you successfully launched the Slicknode Headless CMS Blog Starter
        application. Now <a href="https://console.slicknode.com" target="_blank">open the Slicknode console</a> and add 
        a few blog posts.
        
        <CustomizeInfo/>
      </div>
      <h3>
        Recent Posts
      </h3>
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
