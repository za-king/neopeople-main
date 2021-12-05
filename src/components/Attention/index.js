import Fade from "react-reveal/Fade";

export default function Attention() {
  return (
    <div className=" flex bg-[#FF5800] h-[40vh] justify-center items-center flex-col">
      <Fade bottom>
        <div className="text-6xl font-sans font-thin">Attention</div>
      </Fade>

      <Fade bottom>
        <div className="text-xl font-sans font-thin text-center w-[60%]">
          Jika kamu merasakan gangguan psikologis yang cukup berat silahkan
          segera konsultasikan apa yang sedang kamu rasakan ke tenaga
          profesional atau telfon ke 119 untuk panggilan darurat.
        </div>
      </Fade>
    </div>
  );
}
