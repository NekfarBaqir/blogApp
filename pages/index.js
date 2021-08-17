import { apolloCon } from "../con/apolloCon";
import { GET_ALL_POSTS } from "../graphql/queries";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h1>Welcome to blog app with strapi-graphql and nextjs</h1>
      <div className={styles.postsWrapper}>
        {posts &&
          posts.map((post) => {
            return (
              <div className={styles.card} key={post.id}>
                <p>{post.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const { data, loading, error } = await apolloCon.query({
    query: GET_ALL_POSTS,
  });
  return {
    props: {
      posts: data.articles,
    },
  };
}
