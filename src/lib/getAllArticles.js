import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://gql.hashnode.com',
  cache: new InMemoryCache(),
});

export async function getAllArticles() {
  const query = gql`
  query Publication {
    publication(host: "blog.ahmedramy.me") {
      title
      posts(first: 10) {
        edges {
          node {
            title
            subtitle
            brief
            publishedAt
            coverImage { url }
            url
          }
        }
      }
    }
  }
  `;

  try {
    const { data } = await client.query({ query });
    console.log('Received response:', data);
    console.log('Data Structure:', data.publication.posts.edges);

    const articles = data.publication.posts.edges.map((post) => ({
      title: post.node.title,
      subtitle: post.node.subtitle || post.node.brief,
      coverImage: post.node.coverImage ? post.node.coverImage.url : '',
      date: post.node.publishedAt,
      url: post.node.url
    }));

    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    if (error.networkError) {
      console.error('Network Error:', error.networkError);
    }
    if (error.graphQLErrors) {
      error.graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
    }
    throw error;
  }
}
