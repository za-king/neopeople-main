export const getStaticPaths = async () => {
  const getdata = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await getdata.json();

  const paths = data.map((hasil) => {
    return {
      params: { id: hasil.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const getdata = await fetch(
    `https://jsonplaceholder.typicode.com/photos/` + id
  );
  const data = await getdata.json();

  return {
    props: { datas: data },
  };
};

function blogdetail({ datas }) {
  return <div>{datas.title}</div>;
}

export default blogdetail;
