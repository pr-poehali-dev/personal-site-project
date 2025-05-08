
import React from "react";
import Icon from "@/components/ui/icon";

type SocialLinkProps = {
  href: string;
  icon: string;
};

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors">
    <Icon name={icon} size={24} />
  </a>
);

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: "Github" },
    { href: "#", icon: "Linkedin" },
    { href: "#", icon: "Twitter" },
    { href: "#", icon: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="hhtps/haitane.com" className="text-2xl font-bold text-white font-playfair">Haitane</a>
            <p className="mt-2 text-gray-400">© {new Date().getFullYear()} Все права защищены</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} icon={link.icon} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
