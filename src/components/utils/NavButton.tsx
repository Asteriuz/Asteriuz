import { HiMiniBars3CenterLeft, HiMiniXMark } from "react-icons/hi2";

export default function NavButton() {
  return (
    <div className="fixed right-4 top-4 z-[70] block xl:hidden">
      <button
        id="drawer-button"
        aria-label="Abrir menu"
        className="btn btn-ghost z-[70] rounded-full bg-primary p-2"
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
      </button>
    </div>
  );
}
