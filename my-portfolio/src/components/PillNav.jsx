const PillNav = ({ items = [], activeHref = '', className = '' }) => {
  return (
    <nav className={`w-full flex items-center justify-center py-2 bg-black/60 backdrop-blur-md fixed top-0 left-0 z-[1000] ${className}`}>
      <ul className="flex gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeHref === item.href ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white hover:bg-yellow-300 hover:text-black'}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PillNav;
