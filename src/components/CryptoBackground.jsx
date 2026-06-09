import React, { useEffect, useRef } from "react";

export default function CryptoBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId, frameCount = 0;

    const SYMBOLS = [
      "₿","Ξ","◆","⬡","∞","Ø","◈","⬢","✦","⟠",
      "0","1","A","F","9","3","7","E","B","C",
      "$","#","%","&","@","!","~","^","*","+",
      "⌬","⎔","⧫","⬟","◇","▲","▽","⬠","⬡","◉"
    ];

    let W, H, columns, drops;
    const FONT_SIZE = 14;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      columns = Math.floor(W / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      frameCount++;

      // Only update every 3rd frame — slows rain down by 3x
      if (frameCount % 3 !== 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      // Stronger fade = shorter trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, W, H);

      ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        const y = drops[i] * FONT_SIZE;

        // Head — white with gold glow
        if (drops[i] > 0 && drops[i] < H / FONT_SIZE) {
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#FACC15";
          ctx.shadowBlur = 8;
          ctx.fillText(symbol, i * FONT_SIZE, y);
        }

        // Body
        const brightness = Math.random();
        if (brightness > 0.93) {
          ctx.fillStyle = "#FACC15";
          ctx.shadowColor = "#FACC15";
          ctx.shadowBlur = 4;
        } else if (brightness > 0.75) {
          ctx.fillStyle = "rgba(250,204,21,0.5)";
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = "rgba(250,204,21,0.1)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(symbol, i * FONT_SIZE, y - FONT_SIZE);

        if (y > H && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4; // slower drop speed (was 0.5)
      }

      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.4, // was 0.55
        }}
      />
      {/* Darker center overlay so text is always readable */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.82) 100%)",
        }}
      />
    </>
  );
}