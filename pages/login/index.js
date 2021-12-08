import Layout from "../../src/components/Layout";

export default function login() {
  return (
    <Layout>
      <div className=" bg-[#F4F8FE] h-[120vh] justify-center flex flex-col items-center">
        <div className="">
          <form>
            <div className='p-10'>
              <label for="">username</label>
              <input type="text" />
            </div>

            <div className='p-10'>
              <label for="">password</label>
              <input type="password" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
