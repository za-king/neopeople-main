import Layout from "../../src/components/Layout";
import FaqComp from "../../src/components/FaqComp";
export default function faq() {
  return (
    <Layout>
      <div >
        <h1 className='text-4xl font-sans font-thin'>F.A.Q</h1>
      </div>
      <FaqComp />
    </Layout>
  );
}
