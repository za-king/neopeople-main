import Layout from "../../src/components/Layout";
import Image from "next/image";
export default function register() {
  return (
    <Layout>
      <div className="bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-center">

          <div className='bg-white w-[500px] h-[600px] shadow-2xl rounded'>
          <div className="flex justify-center p-5 ">
              <div className="pr-2">
                <Image
                  src="/Neo-people-logo.png"
                  width={30}
                  height={30}
                  alt="neo"
                />
              </div>

              <p className="font-serif text-lg font-medium">Neo People</p>
            </div>

            <form className='flex flex-col justify-center items-center' >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border  rounded w-[300px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*******"
              />
            </div>

            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Confirm Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-[300px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*******"
              />
            </div>

            <div className="flex justify-center items-center pt-6 ">
              <button className="bg-yellow-600 shadow-lg w-[200px] h-[35px] text-white rounded-full hover:bg-yellow-500 ">
                Create New Account
              </button>
            </div>
            </form>
              

          </div>


      </div>
    </Layout>
  );
}
