import Image from "next/image";
import Link from "next/link";

export default function EventDetailComp() {
  return (
    <>
      <div className="bg-[#F4F8FE] h-[120vh] justify-center flex flex-col items-center">
        <div className="">
          <Image src="/Neo-people-logo.png" width={550} height={500} alt="fe" />
        </div>

        <p className="justify-item-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          doloribus incidunt culpa delectus omnis dolores, sit nobis enim atque
          veniam ratione, quidem impedit excepturi isci fuga quas voluptatem
          cumque architecto. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Alias est et molestias libero, recusandae explicabo nisi dolor?
          Possimus facere et nobis, fuga nam eos voluptates, tenetur recusandae
          sit rem magnam? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Consequuntur et officia ullam veritatis quasi illo alias, totam,
          nesciunt sed nulla nobis itaque eveniet dolorem architecto deleniti
          natus fuga ea eum.
        </p>
      </div>

      <div className="mb-5 flex justify-center">
        <Link href="/pendaftaran" passHref>
          <button
            className=" bg-yellow-200 hover:bg-yellow-300 
        text-black font-bold py-3 px-6 rounded transform hover:-translate-y-1 hover:scale-110"
          >
            Daftar Event
          </button>
        </Link>
      </div>
    </>
  );
}
