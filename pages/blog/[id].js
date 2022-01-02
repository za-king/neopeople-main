import Layout from "../../src/components/Layout";

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await res.json();

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
  const datas = await getdata.json();

  return {
    props: { datas: datas },
  };
};

function blogdetail({ datas }) {
  return (
    <>
      <Layout>
        <div className="flex   justify-center  ">
          <img src={datas.url} width={540} height={665} alt="" />
        </div>
        <div className="flex justify-center">{datas.title}</div>
      </Layout>
    </>
  );
}

export default blogdetail;
