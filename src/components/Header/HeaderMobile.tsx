import Link from "next/link";
import { HiMiniBars3CenterLeft, HiMiniXMark } from "react-icons/hi2";

export default function HeaderMobile() {
  return (
    <div className="drawer z-[60] lg:hidden">
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
              href="#about"
              className="side-link drawer-button cursor-pointer px-6 py-3"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#produtos"
              className="side-link drawer-button cursor-pointer px-6 py-3"
            >
              Serviços
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
  );
}
