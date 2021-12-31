import Layout from "../../src/components/Layout";

export async function getServerSideProps() {
  const getdata = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=9`
  );
  const data = await getdata.json();
  return {
    props: { data },
  };
}

export default function blog({ data }) {
  return (
    <Layout>
      <>
        <div className=" bg-[#F4F8FE] w-full h-full ">
          <div className="h-[20%] pt-36 w-full flex justify-end items-center flex-col">
            <div className="text-4xl font-sans font-medium">Blog</div>
          </div>

          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {data.map((props) => {
              return (
                <div key={props.id} className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg cursor-pointer">
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={props.url}
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {props.albumId}
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      {props.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </Layout>
  );
}
