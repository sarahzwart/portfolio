import { Button } from "@/components/ui/button";
import Image from "next/image";
import SZLogo from "../../assets/szbrown.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 pt-3 bg-[#cee2ce] shadow-sm">
      <div className="flex-shrink-0">
        <Image src={SZLogo} className="w-auto inline-block h-16" alt="Logo" />
      </div>
      <div className="flex space-x-6">
        <Button
          variant="ghost"
          className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
          onClick={() => window.location.hash = "#about"}
        >
          ABOUT
        </Button>
        <Button
          variant="ghost"
          className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
          onClick={() => window.location.hash = "#projects"}
        >
          PROJECTS
        </Button>
      </div>
      <div className="flex-shrink-0">
        <Button
          variant="ghost"
          className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
          onClick={() => window.location.hash = "#contact"}
        >
          CONTACT
        </Button>
      </div>
    </nav>
  );
};
