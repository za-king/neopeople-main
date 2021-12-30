



export default function MultiActionAreaCard({ photos }) {
  return (
    <>
      <div className="bg-[#F4F8FE] w-full h-full">
        <div className="h-[20%] pt-36 w-full flex justify-end items-center flex-col md:justify-center">
          <div className="text-4xl font-sans font-medium">EVENT</div>
        </div>

        <div className=" pl-12 justify-start ">
          <div className="text-3xl font-sans font-thin">UPCOMING EVENT</div>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="my-10 flex bg-white w-[340px] h-[400px] rounded-lg drop-shadow-xl flex-col  cursor-pointer">
            <img
              className=" flex  w-[356px] h-[250px] rounded-t-lg transition  ease-in-out"
              src="/images/img1.jpg"
              alt="Mountain"
            />
            <div className=" py-2 pl-2 font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base pl-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            </p>
          </div>
          
        </div>

        <div className=" pl-12 justify-start ">
          <div className="text-3xl font-sans font-thin">COMPLETED EVENT</div>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="my-10 flex bg-white w-[340px] h-[400px] rounded-lg drop-shadow-xl flex-col  cursor-pointer">
            <img
              className="flex  w-[356px] h-[250px] rounded-t-lg "
              src="/images/img1.jpg"
              alt="Mountain"
            />
            <div className=" py-2 pl-2 font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base pl-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
