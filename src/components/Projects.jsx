import React, { useState, useEffect, useRef } from "react";

const workItems = [
  {
    id: 1,
    title: "Yepe Coin CTO Admin",
    category: "Community Management",
    image: "/pow.jpg",
  },
  {
    id: 2,
    title: "Active Raid Coordination",
    category: "Web3 Moderation",
    image: "/Raider.jpg",
  },
  {
    id: 3,
    title: "community modernization",
    category: "Frontend Development",
    image: "/mod.jpg",
  },
  {
    id: 4,
    title: "community growth",
    category: "Community Growth",
    image: "/shiller.jpg",
  },
  {
    id: 5,
    title: "community engagement",
    category: "Community Management",
    image: "/mod-2.jpg",
  },
  {
    id: 6,
    title: "community engagement",
    category: "Community Management",
    image: "/moderator.jpg",
  },
  {
    id: 7,
    title: "community engagement",
    category: "Community Management",
    image: "/Admin-1.jpg",
  },
  {
    id: 8,
    title: "community engagement",
    category: "Community Management",
    image: "/Admin-2.jpg",
  },
  {
    id: 9,
    title: "community engagement",
    category: "Community Management",
    image: "/Admin-3.jpg",
  },
];

export default function ProofOfWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false); // Used here for "Show Full" state
  const autoRef = useRef(null);
  const total = workItems.length;

  const getIndex = (offset) => (activeIndex + offset + total) % total;

  const next = () => {
    setIsZoomed(false); // Reset 'show full' state on slide change
    setActiveIndex((prev) => (prev + 1) % total);
  };
  
  const prev = () => {
    setIsZoomed(false); // Reset 'show full' state on slide change
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    // We only auto-play if we are NOT in 'show full' mode
    if (!isZoomed) {
      autoRef.current = setInterval(next, 4000);
    }
    return () => clearInterval(autoRef.current);
  }, [activeIndex, isZoomed]);

  const slots = [-1, 0, 1];

  const getSlotStyle = (offset) => {
    if (offset === 0) {
      return {
        zIndex: 10,
        transform: "translateX(-50%) scale(1)",
        opacity: 1,
        visibility: "visible",
        cursor: isZoomed ? "zoom-out" : "zoom-in",
      };
    }

    return {
      zIndex: 1,
      transform: `translateX(${offset > 0 ? "20%" : "-120%"}) scale(0.8)`,
      opacity: 0,
      visibility: "hidden",
    };
  };

  return (
    <section
      id="proof-of-work"
      className="py-24 bg-black text-white"
      style={{ overflow: "hidden" }}
    >
      {/* CSS for Button Hovers and transition smoothing */}
      <style>{`
        .nav-btn:hover { color: #FACC15 !important; transform: scale(1.2); transition: all 0.3s ease; }
        /* Smooth transition for the object-fit change */
        .carousel-img { transition: object-fit 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s ease, filter 0.6s ease; }
        /* Smooth transition for the text gradient hiding */
        .text-overlay { transition: opacity 0.5s ease, visibility 0.5s ease; }
      `}</style>

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#555",
              textTransform: "uppercase",
              fontFamily: "monospace",
              marginBottom: "12px",
            }}
          >
            — verified output —
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Proof of <span style={{ color: "#FACC15" }}>Work</span>
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={prev}
            className="nav-btn"
            style={{
              position: "absolute",
              left: "20px",
              zIndex: 30,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            &#10094;
          </button>

          {slots.map((offset) => {
            const index = getIndex(offset);
            const item = workItems[index];
            const slotStyle = getSlotStyle(offset);

            return (
              <div
                key={`slot-${offset}`}
                // Only enable click toggle on the active center card
                onClick={() => offset === 0 && setIsZoomed(!isZoomed)}
                style={{
                  position: "absolute",
                  left: "50%",
                  width: "300px",
                  height: "380px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  // If 'showing full', we add a subtle border/bg so the image shape is clear
                  background: isZoomed && offset === 0 ? "#111" : "transparent",
                  border: isZoomed && offset === 0 ? "1px solid #333" : "none",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  ...slotStyle,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    // THE KEY CHANGE:
                    // If isZoomed, use 'contain' (show full picture, might have black bars)
                    // Otherwise use 'cover' (fill the card, might crop)
                    objectFit: isZoomed && offset === 0 ? "contain" : "cover",
                  }}
                />

                <div
                  className="text-overlay"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "40px 20px 20px",
                    background: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
                    textAlign: "center",
                    pointerEvents: "none", // Ensures click goes to the parent div
                    // We hide the text when showing the full image to avoid overlap
                    opacity: isZoomed && offset === 0 ? 0 : 1,
                    visibility: isZoomed && offset === 0 ? "hidden" : "visible",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#FACC15",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "5px",
                    }}
                  >
                    {item.category}
                  </p>
                  <p style={{ fontWeight: "bold", fontSize: "16px" }}>{item.title}</p>
                </div>
              </div>
            );
          })}

          <button
            onClick={next}
            className="nav-btn"
            style={{
              position: "absolute",
              right: "20px",
              zIndex: 30,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            &#10095;
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "30px",
          }}
        >
          {workItems.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsZoomed(false);
                setActiveIndex(i);
              }}
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "3px",
                borderRadius: "999px",
                background: i === activeIndex ? "#FACC15" : "#333",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}