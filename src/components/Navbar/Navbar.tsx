'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { FaPaw, FaPeopleGroup } from "react-icons/fa6";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 640) {
        setIsOpen(true);
      }
    }

    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  const links = [
    {
      text: 'Home',
      url: '/home',
      icon: <FaHome />
    },
    {
      text: 'Sobre Nós',
      url: '/about',
      icon: <FaPaw />
    },
    {
      text: 'Equipe',
      url: '/crew',
      icon: <FaPeopleGroup />
    }
  ];
  
  return (
    <header className="flex p-6 sm:max-w-6xl justify-between mx-auto relative item-center">
      <Link href="/" className="text-3xl font-semibold">
        UPit
      </Link>

      <ul className={`bg-purple-600 p-2 gap-4 rounded-lg top-full right-6 text-white absolute flex-col sm:bg-white sm:text-inherit sm:static sm:flex-row sm:gap-6 ${isOpen ? "flex" : "hidden"}`}>
        {
          links.map(link => (
            <li key={link.text}>
              <Link href={link.url} className={`flex justify-between gap-2 flex-row sm:flex-col items-center hover:text-yellow-500 hover:font-semibold trasition ${pathname === link.url && "text-yellow-500 font-semibold"}`}>
                <span className="text-xl">{link.icon}</span>
                {link.text}
              </Link>
            </li>
          ))
        }
      </ul>

      <Link href={'/'} className={`border-2 border-yellow-500 rounded-lg p-2 hover:text-white hover:bg-yellow-500 transition ${pathname === "/" ? "text-white bg-yellow-500" : "text-yellow-500"}`}>
        Área do cliente
      </Link>

      <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden text-xl border-2 border-purple-600 rounded-lg px-3 text-purple-600 hover:text-white hover:bg-purple-600">
        <FaBars />
      </button>
    </header>
  );
}