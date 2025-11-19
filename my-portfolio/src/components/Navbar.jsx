import StaggeredMenu from "./StaggeredMenu";

function Navbar() {
  const menuItems = [
    { label: "Home", link: "#hero", ariaLabel: "Navigate to home section" },
    { label: "About", link: "#about", ariaLabel: "Navigate to about section" },
    { label: "Skills", link: "#skills", ariaLabel: "Navigate to skills section" },
    { label: "Projects", link: "#projects", ariaLabel: "Navigate to projects section" },
    { label: "Contact", link: "#contact", ariaLabel: "Navigate to contact section" }
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/Arnab-apk" },
    { label: "LinkedIn", link: "https://linkedin.com/in/arnab-mandal" },
    { label: "Twitter", link: "https://twitter.com/arnab_mandal" }
  ];

  return (
    <StaggeredMenu
      position="right"
      colors={['#0b1020', '#050816', '#1a1a2e']}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      logoUrl="/vite.svg"
      menuButtonColor="#FFD400"
      openMenuButtonColor="#000000"
      changeMenuColorOnOpen={true}
      isFixed={true}
      accentColor="#FFD400"
    />
  );
}

export default Navbar;
