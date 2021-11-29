import Layout from "../src/components/Layout"
import Hero from "../src/components/Hero"
import Layanan from "../src/components/Layanan"
import Apa from "../src/components/Apa"
import Attention from "../src/components/Attention"
import Media from "../src/components/Media"

export default function Beranda() {
  return (
    <>
    <Layout>
    <Hero />
    <Layanan />
    <Apa />
    <Attention />
    <Media />
    </Layout>

    </>
    
  )
}
