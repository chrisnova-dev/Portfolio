import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse, faUser, faChartLine,
  faEnvelope, faBriefcase, faStar, faTag
} from "@fortawesome/free-solid-svg-icons";

const NAV_ITEMS = [
  { id: "home",         icon: faHouse,    label: "Home"    },
  { id: "about",        icon: faUser,     label: "About"   },
  { id: "skills",       icon: faChartLine,label: "Skills"  },
  { id: "pricing",      icon: faTag,      label: "Pricing" },
  { id: "testimonials", icon: faStar,     label: "Reviews" },
  { id: "contact",      icon: faEnvelope, label: "Contact" },
];

export default function Navbar() {
  const [active,  setActive]  = useState("home");
  const [hovered, setHovered] = useState(null);
  const [pill,    setPill]    = useState({ left: 0, width: 0 });
  const itemRefs = useRef({});

  // Auto-detect section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && NAV_ITEMS.find((n) => n.id === e.target.id)) {
            setActive(e.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Slide pill to active button
  useEffect(() => {
    const btn = itemRefs.current[active];
    if (btn) setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [active]);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{
      position: "fixed", bottom: "28px",
      left: 0, width: "100%",
      display: "flex", justifyContent: "center",
      zIndex: 200,
    }}>
      <nav style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "0px",
        padding: "5px",
        borderRadius: "999px",
        background: "rgba(4,4,4,0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(250,204,21,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.7), 0 0 0 1px rgba(250,204,21,0.04) inset",
      }}>

        {/* Sliding pill */}
        <div style={{
          position: "absolute",
          top: "5px",
          left: pill.left,
          width: pill.width,
          height: "calc(100% - 10px)",
          borderRadius: "999px",
          background: "#FACC15",
          boxShadow: "0 0 16px rgba(250,204,21,0.5), 0 0 32px rgba(250,204,21,0.15)",
          transition: "left 0.38s cubic-bezier(0.4,0,0.2,1), width 0.38s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 0,
        }} />

        {NAV_ITEMS.map((item) => {
          const isActive  = active  === item.id;
          const isHovered = hovered === item.id && !isActive;

          return (
            <button
              key={item.id}
              ref={(el) => (itemRefs.current[item.id] = el)}
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: isActive ? "6px" : "0px",
                // Tighter padding — fixes oversized pill
                padding: isActive ? "9px 14px" : "9px 12px",
                borderRadius: "999px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                transition: "padding 0.35s cubic-bezier(0.4,0,0.2,1), gap 0.35s ease",
              }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{
                  fontSize: "14px",
                  color: isActive ? "#000" : isHovered ? "#FACC15" : "#555",
                  transition: "color 0.25s ease",
                  flexShrink: 0,
                }}
              />

              {/* Label — only on active item */}
              <span style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#000",
                letterSpacing: "0.03em",
                fontFamily: "'Syne', sans-serif",
                maxWidth: isActive ? "50px" : "0px",
                opacity: isActive ? 1 : 0,
                overflow: "hidden",
                whiteSpace: "nowrap",
                transition: "max-width 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
              }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}