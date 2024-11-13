import { useState, ReactNode } from "react";

interface TooltipProps {
  text: ReactNode;
  children: ReactNode;
}

function Tooltip({ text, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="position-absolute">
      <span
        className=""
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      {isVisible && (
        <div
          className="p-3 rounded-3 border-white border"
          style={{
            fontSize: "14px",
            color: "white",
            backgroundColor: "var(--Color1)",
            position: "absolute",
            top: "0",
            right: "-700%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
