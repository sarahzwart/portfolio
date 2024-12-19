import { Button } from "@/components/ui/button";
import SZLogo from "../../assets/sz.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <img src={SZLogo} className="w-auto inline-block h-20" alt="Logo" />
      </div>

      {/* Middle: About and Projects */}
      <div className="flex space-x-4">
        <Button variant="ghost" asChild>
          <a href="#about" className="text-[#545454] hover:text-[#ffbee6] h-12 hover:bg-[#545454]">About</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#projects" className="text-[#545454] hover:text-[#ffbee6] h-12 hover:bg-[#545454]">Projects</a>
        </Button>
      </div>

      {/* Right: Contact */}
      <div className="flex-shrink-0">
        <Button variant="ghost" asChild>
          <a href="#contact" className="text-[#545454] hover:text-[#ffbee6] h-12 hover:bg-[#545454]">Contact</a>
        </Button>
      </div>
    </nav>
  );
};
