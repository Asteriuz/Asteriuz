import { FaWhatsapp } from "react-icons/fa";
import Logo from "@/assets/logo/Logo";
import { HiMiniBars3CenterLeft, HiMiniXMark } from "react-icons/hi2";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      id="nav"
      className="fixed z-40 flex w-full justify-center bg-white  shadow-xl transition-all duration-500 ease-in-out"
    >
      <div
        id="nav-inner"
        className="navbar w-full max-w-screen-xl py-6 transition-all duration-300"
      >
        <div className="navbar-start justify-between sm:justify-normal">
          <div className="drawer  z-[60] lg:hidden">
            <input id="drawer-nav" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content z-[70]">
              <label
                htmlFor="drawer-nav"
                className="btn btn-ghost z-[70] ml-3 rounded-lg bg-primary p-2"
              >
                {/* <HiOutlineBars3CenterLeft className="h-8 w-8" /> */}
                <HiMiniBars3CenterLeft
                  id="drawer-open-icon"
                  className="h-8 w-8 fill-white"
                />

                <HiMiniXMark
                  id="drawer-close-icon"
                  className="hidden h-8 w-8 scale-125 fill-white"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="drawer-nav"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu menu-lg min-h-full w-80 max-w-full bg-white p-4  ">
                <li className="mt-24 hover:bg-transparent">
                  <Link
                    href="#hero"
                    className="side-link drawer-button cursor-pointer px-6 py-3"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sobre"
                    className="side-link drawer-button cursor-pointer px-6 py-3"
                  >
                    EMPRESA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#produtos"
                    className="side-link drawer-button cursor-pointer px-6 py-3"
                  >
                    PRODUTOS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="side-link drawer-button cursor-pointer px-6 py-3"
                  >
                    CONTATO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link aria-label="Home" href="#hero">
            <Logo
              id="logo-nav"
              className="w-44 shrink-0 translate-x-1/2 cursor-pointer duration-300 ease-in-out hover:scale-110 md:hover:scale-110"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex px-1 text-lg font-bold tracking-wider">
            <li>
              <Link
                href="#hero"
                className="cursor-pointer px-6 py-3 transition-colors duration-300 hover:text-primary"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="#sobre"
                className="cursor-pointer px-6 py-3 transition-colors duration-300 hover:text-primary "
              >
                EMPRESA
              </Link>
            </li>
            <li>
              <Link
                href="#produtos"
                className="cursor-pointer px-6 py-3 transition-colors duration-300 hover:text-primary "
              >
                PRODUTOS
              </Link>
            </li>
            <li>
              <Link
                href="#contato"
                className="cursor-pointer px-6 py-3 transition-colors duration-300 hover:text-primary"
              >
                CONTATO
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end z-50 hidden lg:flex">
          <Link
            aria-label="Fale Conosco"
            href="https://wa.me/5511940775846"
            target="_blank"
            className="flex items-center gap-2 rounded-lg bg-primary p-3 text-center text-base font-bold text-white shadow-md duration-300 ease-in-out hover:bg-primary-hover hover:shadow-xl sm:mr-10 sm:px-7 sm:py-3 sm:hover:-translate-y-2"
          >
            <FaWhatsapp className="text-4xl sm:text-3xl" />
            <p className="hidden items-center justify-center text-lg sm:flex">
              FALE CONOSCO
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
