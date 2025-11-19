import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState('50px');
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex backdrop-blur-xl border border-white/20 shadow-lg"
          style={{
            height: 'var(--nav-h)',
            background: 'rgba(250, 204, 21, 0.1)'
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const pillStyle = {
                background: 'rgba(5, 8, 22, 0.8)',
                color: 'var(--pill-text, var(--base, #000))',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)',
                backdropFilter: 'blur(8px)'
              };
              return (
                <li key={item.href} role="none" className="flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    className="relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0"
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                  >
                    <span
                      className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                      style={{
                        background: 'var(--base, #000)',
                        willChange: 'transform'
                      }}
                      aria-hidden="true"
                      ref={el => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack relative inline-block leading-[1] z-[2]">
                      <span
                        return (
                          <>
                            <div
                              className="fixed z-[1000] w-full left-1/2 -translate-x-1/2 md:w-auto top-0"
                              style={{ top: 'calc(env(safe-area-inset-top, 0px) + 0.75rem)' }}
                            >
                              {/* Desktop Nav */}
                              <nav
                                className={`w-full md:w-max flex items-center justify-end md:justify-center box-border px-4 md:px-0 ${className}`}
                                aria-label="Primary"
                                style={cssVars}
                              >
                                <div
                                  ref={navItemsRef}
                                  className="relative items-center rounded-full hidden md:flex backdrop-blur-xl border border-white/20 shadow-lg"
                                  style={{
                                    height: 'var(--nav-h)',
                                    background: 'rgba(250, 204, 21, 0.1)'
                                  }}
                                >
                                  <ul
                                    role="menubar"
                                    className="list-none flex items-stretch m-0 p-[3px] h-full"
                                    style={{ gap: 'var(--pill-gap)' }}
                                  >
                                    {items.map((item, i) => {
                                      const isActive = activeHref === item.href;
                                      const pillStyle = {
                                        background: 'rgba(5, 8, 22, 0.8)',
                                        color: 'var(--pill-text, var(--base, #000))',
                                        paddingLeft: 'var(--pill-pad-x)',
                                        paddingRight: 'var(--pill-pad-x)',
                                        backdropFilter: 'blur(8px)'
                                      };
                                      return (
                                        <li key={item.href} role="none" className="flex h-full">
                                          <a
                                            role="menuitem"
                                            href={item.href}
                                            className="relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0"
                                            style={pillStyle}
                                            aria-label={item.ariaLabel || item.label}
                                            onMouseEnter={() => handleEnter(i)}
                                            onMouseLeave={() => handleLeave(i)}
                                            onClick={(e) => handleSmoothScroll(e, item.href)}
                                          >
                                            <span
                                              className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                                              style={{
                                                background: 'var(--base, #000)',
                                                willChange: 'transform'
                                              }}
                                              aria-hidden="true"
                                              ref={el => {
                                                circleRefs.current[i] = el;
                                              }}
                                            />
                                            <span className="label-stack relative inline-block leading-[1] z-[2]">
                                              <span
                                                className="pill-label relative z-[2] inline-block leading-[1]"
                                                style={{ willChange: 'transform' }}
                                              >
                                                {item.label}
                                              </span>
                                              <span
                                                className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                                                style={{
                                                  color: 'var(--hover-text, #fff)',
                                                  willChange: 'transform, opacity'
                                                }}
                                                aria-hidden="true"
                                              >
                                                {item.label}
                                              </span>
                                            </span>
                                            {isActive && (
                                              <span
                                                className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                                                style={{ background: 'var(--base, #000)' }}
                                                aria-hidden="true"
                                              />
                                            )}
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* Hamburger for mobile */}
                                <button
                                  ref={hamburgerRef}
                                  onClick={toggleMobileMenu}
                                  aria-label="Toggle menu"
                                  aria-expanded={isMobileMenuOpen}
                                  className="md:hidden rounded-full backdrop-blur-xl border border-white/20 shadow-lg flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative"
                                  style={{
                                    width: 'var(--nav-h)',
                                    height: 'var(--nav-h)',
                                    background: 'rgba(250, 204, 21, 0.1)'
                                  }}
                                >
                                  <span
                                    className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                    style={{ background: 'var(--pill-bg, #fff)' }}
                                  />
                                  <span
                                    className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                    style={{ background: 'var(--pill-bg, #fff)' }}
                                  />
                                </button>
                              </nav>
                              {/* Mobile Dropdown */}
                              <div
                                ref={mobileMenuRef}
                                className="md:hidden absolute left-2 right-2 rounded-[30px] shadow-[0_12px_48px_rgba(0,0,0,0.45)] z-[998] origin-top backdrop-blur-2xl border border-yellow-300/40 ring-2 ring-yellow-200/30 animate-mobileDropdown"
                                style={{
                                  ...cssVars,
                                  background: 'rgba(250, 204, 21, 0.22)',
                                  top: 'calc(env(safe-area-inset-top, 0px) + var(--nav-h) + 0.75rem)',
                                  boxShadow: '0 12px 48px 0 rgba(0,0,0,0.45), 0 0 0 2px rgba(250,204,21,0.12)',
                                  border: '1.5px solid rgba(250,204,21,0.22)',
                                  transition: 'box-shadow 0.3s cubic-bezier(.4,2,.6,1), background 0.3s cubic-bezier(.4,2,.6,1)'
                                }}
                              >
                                <style>{`
                                  @keyframes mobileDropdown {
                                    0% { opacity: 0; transform: translateY(-16px) scale(0.98); }
                                    100% { opacity: 1; transform: translateY(0) scale(1); }
                                  }
                                  .animate-mobileDropdown {
                                    animation: mobileDropdown 0.32s cubic-bezier(.4,2,.6,1);
                                  }
                                `}</style>
                                <ul className="list-none m-0 p-[3px] flex flex-col gap-2">
                                  {items.map(item => {
                                    const defaultStyle = {
                                      background: 'rgba(5, 8, 22, 0.8)',
                                      color: 'var(--pill-text, #fff)',
                                      backdropFilter: 'blur(8px)',
                                      minHeight: '44px'
                                    };
                                    const hoverIn = e => {
                                      e.currentTarget.style.background = 'var(--base)';
                                      e.currentTarget.style.color = 'var(--hover-text, #fff)';
                                    };
                                    const hoverOut = e => {
                                      e.currentTarget.style.background = 'var(--pill-bg, #fff)';
                                      e.currentTarget.style.color = 'var(--pill-text, #fff)';
                                    };
                                    const linkClasses =
                                      'block py-3.5 px-5 text-[17px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]';
                                    return (
                                      <li key={item.href}>
                                        <a
                                          href={item.href}
                                          className={linkClasses}
                                          style={defaultStyle}
                                          onMouseEnter={hoverIn}
                                          onMouseLeave={hoverOut}
                                          onClick={(e) => handleSmoothScroll(e, item.href)}
                                        >
                                          {item.label}
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </>
          </nav>
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute left-2 right-2 rounded-[30px] shadow-[0_12px_48px_rgba(0,0,0,0.45)] z-[998] origin-top backdrop-blur-2xl border border-yellow-300/40 ring-2 ring-yellow-200/30 animate-mobileDropdown"
            style={{
              ...cssVars,
              background: 'rgba(250, 204, 21, 0.22)',
              top: 'calc(env(safe-area-inset-top, 0px) + var(--nav-h) + 0.75rem)',
              boxShadow: '0 12px 48px 0 rgba(0,0,0,0.45), 0 0 0 2px rgba(250,204,21,0.12)',
              border: '1.5px solid rgba(250,204,21,0.22)',
              transition: 'box-shadow 0.3s cubic-bezier(.4,2,.6,1), background 0.3s cubic-bezier(.4,2,.6,1)'
            }}
          >
            {/* Add keyframes for dropdown animation if not present */}
            <style>{`
              @keyframes mobileDropdown {
                0% { opacity: 0; transform: translateY(-16px) scale(0.98); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
              }
              .animate-mobileDropdown {
                animation: mobileDropdown 0.32s cubic-bezier(.4,2,.6,1);
              }
            `}</style>
            <ul className="list-none m-0 p-[3px] flex flex-col gap-2">
              {items.map(item => {
                const defaultStyle = {
                  background: 'rgba(5, 8, 22, 0.8)',
                  color: 'var(--pill-text, #fff)',
                  backdropFilter: 'blur(8px)',
                  minHeight: '44px'
                };
                const hoverIn = e => {
                  e.currentTarget.style.background = 'var(--base)';
                  e.currentTarget.style.color = 'var(--hover-text, #fff)';
                };
                const hoverOut = e => {
                  e.currentTarget.style.background = 'var(--pill-bg, #fff)';
                  e.currentTarget.style.color = 'var(--pill-text, #fff)';
                };

                const linkClasses =
                  'block py-3.5 px-5 text-[17px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]';

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={linkClasses}
                      style={defaultStyle}
                      onMouseEnter={hoverIn}
                      onMouseLeave={hoverOut}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                      style={{ background: 'var(--base, #000)' }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';

              return (
                <li key={item.href} role="none" className="flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    className={basePillClasses}
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                  >
                    {PillContent}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full backdrop-blur-xl border border-white/20 shadow-lg flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
            background: 'rgba(250, 204, 21, 0.1)'
          }}
        >
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: 'var(--pill-bg, #fff)' }}
          />
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: 'var(--pill-bg, #fff)' }}
          />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-[998] origin-top backdrop-blur-xl border border-white/20"
        style={{
          ...cssVars,
          background: 'rgba(250, 204, 21, 0.15)',
          top: 'calc(env(safe-area-inset-top, 0px) + var(--nav-h) + 0.75rem)'
        }}
      >
        <ul className="list-none m-0 p-[3px] flex flex-col gap-2">
          {items.map(item => {
            const defaultStyle = {
              background: 'rgba(5, 8, 22, 0.8)',
              color: 'var(--pill-text, #fff)',
              backdropFilter: 'blur(8px)',
              minHeight: '44px'
            };
            const hoverIn = e => {
              e.currentTarget.style.background = 'var(--base)';
              e.currentTarget.style.color = 'var(--hover-text, #fff)';
            };
            const hoverOut = e => {
              e.currentTarget.style.background = 'var(--pill-bg, #fff)';
              e.currentTarget.style.color = 'var(--pill-text, #fff)';
            };

            const linkClasses =
              'block py-3.5 px-5 text-[17px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]';

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={linkClasses}
                  style={defaultStyle}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
