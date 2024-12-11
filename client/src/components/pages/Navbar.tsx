import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
      <h1 className="text-2xl font-bold text-white">Sarah Zwart</h1>
      <div className="space-x-4">
        <Button variant="ghost" asChild>
          <a href="#about" className="text-white hover:text-gray-200">About</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#projects" className="text-white hover:text-gray-200">Projects</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
        </Button>
      </div>
    </nav>
  );
};
