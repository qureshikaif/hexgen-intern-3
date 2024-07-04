import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";
import { Search, ShoppingCart } from "lucide-react";

const links = [
  {
    name: "Store",
    link: "/store",
  },
  {
    name: "PC",
    link: "/store",
  },
  {
    name: "Console",
    link: "/store",
  },
  {
    name: "Mobile",
    link: "/store",
  },
  {
    name: "Lifestyle",
    link: "/store",
  },
  {
    name: "Gold",
    link: "/store",
  },
  {
    name: "Community",
    link: "/store",
  },
  {
    name: "Support",
    link: "/store",
  },
];

const Header = () => {
  return (
    <nav className="bg-black h-16 w-full flex items-center justify-center">
      <div className="flex justify-between w-full px-40">
        <Image src={logo} alt="logo" className="w-8 h-8 object-contain mr-20" />
        <ul className="flex justify-between w-full items-center">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.link} className="text-gray-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Search className="text-gray-300 mt-1 ml-10" />
        <ShoppingCart className="text-gray-300 mt-1 ml-10" />
      </div>
    </nav>
  );
};

export default Header;
