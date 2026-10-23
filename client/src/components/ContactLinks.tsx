import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/site";
import { cn } from "@/lib/utils";

const iconButton =
  "rounded-full border-2 bg-transparent hover:bg-secondary hover:text-secondary-foreground [&_svg]:size-5";

// Email button plus GitHub and LinkedIn icons, shared by both layouts
export const ContactLinks = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-wrap items-center gap-4", className)}>
    <Button asChild size="pill">
      <a href={`mailto:${profile.email}`}>Email me</a>
    </Button>
    <Button asChild variant="outline" size="icon" className={iconButton}>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </Button>
    <Button asChild variant="outline" size="icon" className={iconButton}>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
    </Button>
  </div>
);
