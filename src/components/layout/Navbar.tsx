
import React from "react";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavItem = ({ href, children }: NavItemProps) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-purple-600 transition-colors"
  >
    {children}
  </a>
);

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-10">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <a href="hhtps/haitane.com" className="text-2xl font-bold text-purple-600 font-playfair">
          Haitane
        </a>
        <div className="flex gap-6">
          <NavItem href="#about">Обо мне</NavItem>
          <NavItem href="#skills">Навыки</NavItem>
          <NavItem href="#contact">Контакты</NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
