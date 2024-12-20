import { Button } from "@/components/ui/button";
import Image from "next/image";
import SZLogo from "../../assets/pinksz.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 pt-3 bg-[#f4f4f4] shadow-sm">
      <div className="flex-shrink-0">
        <Image src={SZLogo} className="w-auto inline-block h-16" alt="Logo" />
      </div>
      <div className="flex space-x-6">
        <Button
          variant="ghost"
          className="font-bold text-gray-700 hover:text-[#f759ba] h-10"
          onClick={() => window.location.hash = "#about"}
        >
          ABOUT
        </Button>
        <Button
          variant="ghost"
          className="font-bold text-gray-700 hover:text-[#f759ba] h-10"
          onClick={() => window.location.hash = "#projects"}
        >
          PROJECTS
        </Button>
      </div>
      <div className="flex-shrink-0">
        <Button
          variant="ghost"
          className="font-bold text-gray-700 hover:text-[#f759ba] h-10"
          onClick={() => window.location.hash = "#contact"}
        >
          CONTACT
        </Button>
      </div>
    </nav>
  );
};
