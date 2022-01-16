import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";
import Layanan from "../src/components/Layanan";
import Apa from "../src/components/Apa";
import Attention from "../src/components/Attention";
import Media from "../src/components/Media";
import BlogComp from "../src/components/blogComp";

export default function Beranda() {
  return (
    <>
      <Layout>
        <Hero />
        <Layanan />
        <Apa />
        <Media />
        {/* <BlogComp /> */}
        <Attention />
      </Layout>
    </>
  );
}
