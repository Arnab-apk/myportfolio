import { FloatingDock } from "./ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconTools,
  IconStar,
} from "@tabler/icons-react";

function PortfolioDock() {
  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-brand-yellow" />
      ),
      href: "#hero",
      onClick: handleSmoothScroll,
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-blue-400" />
      ),
      href: "#about",
      onClick: handleSmoothScroll,
    },
    {
      title: "Tech Stack",
      icon: (
        <IconTools className="h-full w-full text-purple-400" />
      ),
      href: "#tech-stack",
      onClick: handleSmoothScroll,
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-green-400" />
      ),
      href: "#skills",
      onClick: handleSmoothScroll,
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-cyan-400" />
      ),
      href: "#projects",
      onClick: handleSmoothScroll,
    },
    {
      title: "Expertise",
      icon: (
        <IconStar className="h-full w-full text-orange-400" />
      ),
      href: "#expertise",
      onClick: handleSmoothScroll,
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-red-400" />
      ),
      href: "#contact",
      onClick: handleSmoothScroll,
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-500" />
      ),
      href: "https://www.linkedin.com/in/arnab-mandal-00200131a/",
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-green-500" />
      ),
      href: "https://wa.me/919830945015",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-slate-300" />
      ),
      href: "https://github.com/Arnab-apk",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}

export default PortfolioDock;
