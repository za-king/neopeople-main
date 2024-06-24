import Layout from "../../src/components/Layout";
import Image from "next/image";
import Link from 'next/link'


export default function login() {
  return (
    <Layout>
      <div className=" bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-center">
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
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
            <div class="mb-4 ">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*******"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <div className="flex justify-center items-center pt-6">
              <Link href='/register'>
              <button className="bg-yellow-600 w-[200px] h-[35px] text-white rounded-full hover:bg-yellow-500   shadow-2xl shadow-yellow-500">
                Create New Account
              </button>
              
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
