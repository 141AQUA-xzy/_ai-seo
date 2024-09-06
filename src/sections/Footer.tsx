import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocio from "@/assets/social-instagram.svg";
import YtSocio from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="text-white py-5 md:py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex gap-2 lg:flex-1 ">
            <Logo className="h-6 w-6" />
            <div>AI Startup Landing Page</div>
          </div>
          <nav className="flex lg:flex-1 flex-col lg:flex-row lg:gap-7 gap-5 lg:justify-center">
            <a
              href="#"
              className="text-white/70 hover:text-white  text-xs md:text-sm"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white  text-xs md:text-sm"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white  text-xs md:text-sm"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white  text-xs md:text-sm"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white  text-xs md:text-sm"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <InstaSocio className="text-white/70 hover:text-white transition" />
            <YtSocio className="text-white/70 hover:text-white transition" />
            <XSocial className="text-white/70 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
