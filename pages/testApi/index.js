

export async function getServerSideProps() {
  const getpost = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const posts = await getpost.json();
  return {
    props: { posts },
  };
}

export default function tesApi({ posts }) {
  console.log(posts);
  return (
    <div className=''>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>name</h1>
            <h2>{post.name}</h2>

            <h3>username</h3>
            <p>{post.username}</p>
          </div>
        );
      })}
    </div>
  );
}
