import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

/* ============================================================
   CONFIG
   ============================================================ */
const MENU_ITEMS = [
  { name: "Chi sono", id: "Profile" },
  { name: "Servizi", id: "Servizi" },
];

const CONTACT_ID = "Contatti";

/* ============================================================
   HOOK: monta solo lato client (per il Portal)
   ============================================================ */
const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

/* ============================================================
   HEADER
   ============================================================ */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  const headerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const mounted = useMounted();

  /* ---------- Progress bar ---------- */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  /* ---------- Scroll state (rAF + passive) ---------- */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Active section (IntersectionObserver) ---------- */
  useEffect(() => {
    const ids = [...MENU_ITEMS.map((i) => i.id), CONTACT_ID];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ---------- Smooth scroll ---------- */
  const scrollToElement = useCallback(
    (id) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      const headerHeight = headerRef.current?.offsetHeight ?? 80;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
      setMenuOpen(false);
    },
    [shouldReduceMotion]
  );

  /* ---------- Deep link iniziale ---------- */
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const t = setTimeout(() => scrollToElement(id), 120);
    return () => clearTimeout(t);
  }, [scrollToElement]);

  /* ---------- Lock scroll (iOS-safe, NON rompe il fixed) ---------- */
  useEffect(() => {
    if (!menuOpen) return;

    const scrollBarCompensation =
      window.innerWidth - document.documentElement.clientWidth;

    const html = document.documentElement;
    const originalOverflow = html.style.overflow;
    const originalPaddingRight = html.style.paddingRight;

    html.style.overflow = "hidden";
    if (scrollBarCompensation > 0) {
      html.style.paddingRight = `${scrollBarCompensation}px`;
    }

    return () => {
      html.style.overflow = originalOverflow;
      html.style.paddingRight = originalPaddingRight;
    };
  }, [menuOpen]);

  /* ---------- ESC chiude il menu ---------- */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* ---------- CSS var --header-h ---------- */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setVar = () =>
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight}px`
      );
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToElement(id);
  };

  const spring = { type: "spring", stiffness: 380, damping: 30 };

  /* =========================================================
     RENDER
     ========================================================= */
  return (
    <>
      {/* =========================================================
          HEADER
         ========================================================= */}
      <div
        className={`fixed z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "top-2 sm:top-3 left-0 right-0 mx-auto w-[min(1240px,calc(100%-1rem))] sm:w-[min(1240px,calc(100%-2rem))]"
            : "top-0 left-0 right-0 w-full"
        }`}
      >
        <motion.header
          ref={headerRef}
          initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`transition-all duration-500 ease-out ${
            scrolled
              ? "rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_8px_rgba(16,24,40,0.04),0_12px_28px_rgba(16,24,40,0.08)]"
              : "rounded-none bg-transparent shadow-none"
          }`}
        >
          <div className="flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* ===================== LOGO ===================== */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, "top")}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6FA5]/50 rounded-xl p-1"
              aria-label="Torna all'inizio — Martino Bani"
            >
              {/* Monogramma */}
              <motion.span
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.06, rotate: -3 }
                }
                transition={spring}
                className={`relative grid place-items-center w-10 h-10 rounded-xl
                           bg-gradient-to-br from-[#4A6FA5] via-[#357ABD] to-[#2C4A7C]
                           text-white font-black text-sm tracking-tight
                           transition-all duration-500
                           ${
                             scrolled
                               ? "ring-1 ring-inset ring-white/25 shadow-[0_4px_12px_rgba(74,111,165,0.45)] group-hover:shadow-[0_6px_18px_rgba(74,111,165,0.6)]"
                               : "ring-2 ring-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
                           }`}
              >
                MB
                {scrolled && (
                  <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25" />
                )}
              </motion.span>

              {/* Wordmark */}
              <span className="flex flex-col leading-none">
                <span
                  className={`text-[15px] sm:text-base font-bold tracking-tight transition-colors duration-500 ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Martino Bani
                </span>
                <span
                  className={`mt-1 text-[9.5px] uppercase tracking-[0.22em] font-semibold transition-colors duration-500 ${
                    scrolled ? "text-[#4A6FA5]" : "text-white/80"
                  }`}
                >
                  Consulente
                </span>
              </span>
            </a>

            {/* ===================== DESKTOP NAV ===================== */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Navigazione principale"
            >
              {MENU_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative px-3.5 py-2 text-sm font-semibold tracking-wide
                                transition-colors duration-500 rounded-full
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6FA5]/40
                                ${
                                  isActive
                                    ? scrolled
                                      ? "text-gray-900"
                                      : "text-white"
                                    : scrolled
                                    ? "text-gray-600 hover:text-gray-900"
                                    : "text-white/75 hover:text-white"
                                }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {hoveredItem === item.id && !isActive && (
                      <motion.span
                        layoutId="nav-hover"
                        className={`absolute inset-0 rounded-full transition-colors duration-500 ${
                          scrolled ? "bg-gray-900/[0.05]" : "bg-white/10"
                        }`}
                        transition={spring}
                      />
                    )}

                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        className={`absolute inset-0 rounded-full transition-colors duration-500 ${
                          scrolled
                            ? "bg-gradient-to-r from-[#4A6FA5]/12 to-[#357ABD]/12 ring-1 ring-[#4A6FA5]/15"
                            : "bg-white/10 ring-1 ring-white/20"
                        }`}
                        transition={spring}
                      />
                    )}
                  </a>
                );
              })}

              <span
                className={`w-px h-5 mx-2 transition-colors duration-500 ${
                  scrolled ? "bg-gray-200" : "bg-white/20"
                }`}
                aria-hidden="true"
              />

              {/* CTA */}
              <motion.a
                href={`#${CONTACT_ID}`}
                onClick={(e) => handleNavClick(e, CONTACT_ID)}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={spring}
                className="group relative inline-flex items-center gap-1.5
                           px-5 py-2 text-sm font-semibold text-white rounded-full
                           bg-gradient-to-r from-[#4A6FA5] to-[#357ABD]
                           shadow-[0_4px_14px_rgba(74,111,165,0.4)]
                           hover:shadow-[0_8px_24px_rgba(74,111,165,0.55)]
                           transition-shadow duration-300 overflow-hidden
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4A6FA5]/30"
              >
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <span
                    className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                               bg-gradient-to-r from-transparent via-white/35 to-transparent
                               translate-x-[-200%] group-hover:translate-x-[400%]
                               transition-transform duration-700 ease-out"
                  />
                </span>
                <span className="relative z-10">Contatti</span>
                <svg
                  className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </motion.a>
            </nav>

            {/* ===================== MOBILE TOGGLE ===================== */}
            <motion.button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden relative grid place-items-center w-10 h-10 rounded-xl
                          ring-1 transition-all duration-500
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6FA5]/50
                          ${
                            scrolled
                              ? "text-gray-900 bg-white/70 backdrop-blur ring-black/5 hover:bg-white"
                              : "text-white bg-white/10 backdrop-blur ring-white/20 hover:bg-white/20"
                          }`}
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <FaTimes
                      className={`text-xl transition-colors duration-500 ${
                        scrolled ? "text-[#4A6FA5]" : "text-white"
                      }`}
                      aria-hidden="true"
                    />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <FaBars className="text-xl" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.header>
      </div>

      {/* =========================================================
          PROGRESS BAR (Portal su body)
         ========================================================= */}
      {mounted &&
        createPortal(
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]
                       bg-gradient-to-r from-[#4A6FA5] via-[#357ABD] to-[#E8A44D]
                       shadow-[0_0_12px_rgba(74,111,165,0.6)] pointer-events-none"
          />,
          document.body
        )}

      {/* =========================================================
          MOBILE MENU (Portal su body)
         ========================================================= */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <div
                className="md:hidden"
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 9999,
                }}
              >
                {/* -------- Backdrop (z-index 1) -------- */}
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(17, 24, 39, 0.5)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    zIndex: 1,
                  }}
                  aria-hidden="true"
                />

                {/* -------- Drawer (z-index 2) -------- */}
                <motion.aside
                  key="drawer"
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Menu di navigazione"
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { x: "100%" }
                  }
                  animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 32,
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: "86%",
                    maxWidth: "380px",
                    background: "#ffffff",
                    boxShadow: "-20px 0 60px rgba(16,24,40,0.25)",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 2,
                  }}
                >
                  {/* Header interno */}
                  <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="grid place-items-center w-9 h-9 rounded-lg
                                   bg-gradient-to-br from-[#4A6FA5] to-[#2C4A7C]
                                   text-white font-black text-xs"
                      >
                        MB
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        Menu
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      className="grid place-items-center w-9 h-9 rounded-lg text-gray-500
                                 hover:text-gray-900 hover:bg-gray-100 transition-colors
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6FA5]/40"
                      aria-label="Chiudi menu"
                    >
                      <FaTimes className="text-lg" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Nav mobile */}
                  <motion.nav
                    className="flex flex-col px-6 py-8 gap-2"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: shouldReduceMotion ? 0 : 0.06,
                          delayChildren: shouldReduceMotion ? 0 : 0.1,
                        },
                      },
                      closed: {},
                    }}
                  >
                    {MENU_ITEMS.map((item, index) => {
                      const isActive = activeSection === item.id;
                      return (
                        <motion.a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => handleNavClick(e, item.id)}
                          variants={{
                            closed: shouldReduceMotion
                              ? { opacity: 0 }
                              : { opacity: 0, x: 40 },
                            open: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                type: "spring",
                                stiffness: 320,
                                damping: 28,
                              },
                            },
                          }}
                          className={`group flex items-center justify-between
                                      py-3.5 px-4 -mx-2 rounded-xl
                                      text-2xl font-bold tracking-tight
                                      transition-colors
                                      ${
                                        isActive
                                          ? "text-[#4A6FA5] bg-[#4A6FA5]/5"
                                          : "text-gray-900 hover:text-[#4A6FA5] hover:bg-gray-50"
                                      }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-[11px] font-mono font-semibold text-gray-400 tabular-nums">
                              0{index + 1}
                            </span>
                            {item.name}
                          </span>
                          <svg
                            className="w-5 h-5 opacity-0 -translate-x-2
                                       group-hover:opacity-100 group-hover:translate-x-0
                                       transition-all duration-300 text-[#4A6FA5]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </motion.a>
                      );
                    })}
                  </motion.nav>

                  {/* CTA in fondo */}
                  <motion.div
                    className="mt-auto p-6 border-t border-gray-100"
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.35,
                      duration: 0.4,
                    }}
                  >
                    <motion.a
                      href={`#${CONTACT_ID}`}
                      onClick={(e) => handleNavClick(e, CONTACT_ID)}
                      whileTap={
                        shouldReduceMotion ? undefined : { scale: 0.97 }
                      }
                      className="group relative flex items-center justify-center gap-2 w-full
                                 py-3.5 rounded-2xl text-white font-semibold
                                 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD]
                                 shadow-[0_8px_24px_rgba(74,111,165,0.45)]
                                 hover:shadow-[0_12px_32px_rgba(74,111,165,0.6)]
                                 transition-shadow duration-300 overflow-hidden"
                    >
                      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                        <span
                          className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                                     bg-gradient-to-r from-transparent via-white/35 to-transparent
                                     translate-x-[-200%] group-hover:translate-x-[400%]
                                     transition-transform duration-700 ease-out"
                        />
                      </span>
                      <span className="relative z-10">Parliamone</span>
                      <svg
                        className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </motion.a>

                    <p className="mt-4 text-center text-xs text-gray-400">
                      Risposta entro 24h · Consulenza gratuita
                    </p>
                  </motion.div>
                </motion.aside>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Header;