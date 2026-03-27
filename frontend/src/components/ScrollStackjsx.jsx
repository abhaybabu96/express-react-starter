// components/ui/ScrollStack.jsx
import { useRef, useEffect, useState } from "react";

export default function ScrollStack({ children }) {
  const containerRef = useRef(null);
  const [offsets, setOffsets] = useState([]);
  const count = Array.from(children).length;

  useEffect(() => {
    const childrenArray = Array.from(containerRef.current.children);

    const newOffsets = childrenArray.map((_, i) => i * 30);
    setOffsets(newOffsets);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center"
      style={{
        height: `${count * 65}vh`,
      }}
    >
      {Array.from(children).map((child, i) => (
        <div
          key={i}
          className="sticky top-20 w-full max-w-7xl transition-all duration-300"
          style={{
            transform: `translateY(${offsets[i] || 0}px)`,
            zIndex: 50 + i,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}