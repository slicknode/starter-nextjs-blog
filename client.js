import {GraphQLClient} from 'graphql-request';

let cachedClient;

export function getClient(context) {
  // Check if client is cached
  if (cachedClient) {
    return cachedClient;
  }

  const endpoint = process.env.NEXT_PUBLIC_SLICKNODE_ENDPOINT;
  if (!endpoint) {
    throw new Error('Env variable NEXT_PUBLIC_SLICKNODE_ENDPOINT not configured. Add the Slicknode endpoint to your src/.env file or run `yarn setup`');
  }

  const client = new GraphQLClient(
    endpoint,
    {
      headers: {
        // Set preview / published mode via preview context
        'x-slicknode-preview': context && context.preview ? '1' : '0',
      },
    },
  );

  // Cache client in browser
  if (typeof window !== 'undefined') {
    cachedClient = client;
  }
  return client;
}
