import Link from "next/link";
import Image from "next/image";
import Sidebar from "../Sidebar";
import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {click && (
        <aside
          className=" bg-white w-64  h-full left-0  
      inset-y-0 flex flex-col md:hidden fixed transform 
      translate-x-0 transition duration-200 ease-in-out
      "
        >
          <div className="border-r flex-grow">
            <nav>
              <ul className="">
                <li className="p-3 mt-20">
                  <Link className="" href="/">
                    Beranda
                  </Link>
                </li>
                <li className="p-3">
                  <Link className="" href="/layanan">
                    Layanan
                  </Link>
                </li>
                <li className="p-3">
                  {" "}
                  <Link className="p-4" href="/team">
                    Team
                  </Link>
                </li>
                <li className="p-3">
                  <Link className="p-4" href="/eventpages">
                    Events
                  </Link>
                </li>
                <li className="p-3">
                  <Link className="p-4" href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="p-3">
                  <Link className="p-4" href="/konsultasi">
                    konsultasi
                  </Link>
                </li>
                <li className="p-3">
                  <Link className="p-4" href="/faq">
                    F.A.Q
                  </Link>
                </li>

                <li className="p-3">
                  <Link className="p-4" href="/.">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}

      <nav
        className="bg-white flex justify-between items-center h-16 text-black
         fixed top-0 left-0 right-0 "
      >
        <div className="px-4 cursor-pointer md:hidden" onClick={handleClick}>
          <div>
            {click ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </div>

        <div className="p-4  cursor-pointer ">
          <Link href="/" passHref>
            <Image
              src="/Neo-people-logo.png"
              width={40}
              height={40}
              alt="neo"
            />
          </Link>
        </div>

        <div className="pr-8 md:block hidden space-x-5 ">
          <Link className="p-4 hover:decoration-blue-400" href="/">
            Beranda
          </Link>

          <Link className="p-4" href="/layanan">
            Layanan
          </Link>

          <Link className="p-4" href="/team">
            Team
          </Link>

          <Link className="p-4" href="/eventpages">
            Events
          </Link>

          <Link className="p-4" href="/blog">
            Blog
          </Link>

          <Link className="p-4" href="/konsultasi">
            Konsultasi
          </Link>

          <Link className="p-4" href="/faq">
            F.A.Q
          </Link>

          <Link className="p-4" href="/login">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}
