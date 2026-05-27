import React from "react";
import "remixicon/fonts/remixicon.css";

export default function Header() {
  return (
    <div className="fixed w-full z-10 px-15 py-15 flex items-center justify-end gap-2.5">
      <button className="bg-black px-6 py-3 rounded-full border-2 text-xl hover:bg-gray-500">
        Hire me
      </button>
      <i className="ri-menu-fold-fill text-3xl ml-2 mr-3"></i>
    </div>
  );
}
