import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg";
import Button from "@/components/Button";
export const Header = () => {
  return (
    <header className="p-4 md:p-0 md:pt-3  border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15  md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div className="h-10 w-10 border border-white/15 inline-flex rounded-lg items-center justify-center">
            <LogoIcon className="h-8 w-8" />
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm text-white/70">
              <a href="#" className="hover:text-white transition">
                Features
              </a>
              <a href="#" className="hover:text-white transition">
                Developers
              </a>
              <a href="#" className="hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
