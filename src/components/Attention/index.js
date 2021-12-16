import Fade from "react-reveal/Fade";

export default function Attention() {
  return (
    <div className=" flex bg-[#FF5800] w-full h-[40vh] justify-center items-center flex-col">
      <div className="flex justify-center p-10 mt-0 ">
        <div className="text-6xl font-sans font-thin">Attention</div>
      </div>

      <div className="text-xl font-sans font-normal text-center w-[60%]">
        Jika kamu merasakan gangguan psikologis yang cukup berat silahkan segera
        konsultasikan apa yang sedang kamu rasakan ke tenaga profesional atau
        telfon ke 119 untuk panggilan darurat.
      </div>
    </div>
  );
}
