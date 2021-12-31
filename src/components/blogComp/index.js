
export default function BlogComp() {
  return (
    <div className=" bg-[#F4F8FE] w-full h-full ">
      <div className="h-[20%] pt-36 w-full flex justify-end items-center flex-col">
        <div className="text-4xl font-sans font-medium">Blog</div>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/images/img1.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/images/img1.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/images/img1.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/images/img1.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
