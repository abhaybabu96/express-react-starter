import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SplitText({ text }) {
  const el = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!el.current) return;

    const chars = el.current.querySelectorAll("span");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top 80%",
          },
        }
      );
    }, el);

    return () => ctx.revert(); // cleanup (important)
  }, []);

  return (
    <span ref={el}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}