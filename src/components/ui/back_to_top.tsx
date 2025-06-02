import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setIsVisible(scrollY > docHeight * 0.7);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`fixed z-50 flex flex-col items-center group bg-transparent border-none outline-none p-0
        ${isVisible ? "" : "hidden"}
        bottom-6 right-6
        sm:bottom-6 sm:right-6
        xs:bottom-4 xs:right-4
      `}
      style={{ cursor: "pointer" }}
    >
      <span
        className="
          flex items-center justify-center rounded-full
          w-9 h-9
          sm:w-9 sm:h-9
          xs:w-7 xs:h-7
        "
        style={{
          background: "#e9e9ff",
        }}
      >
        {/* Upward chevron/arrow SVG, responsive */}
        <svg
          className="w-5 h-5 sm:w-5 sm:h-5 xs:w-4 xs:h-4"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="11" fill="#e9e9ff" />
          <polyline
            points="7,13 11,9 15,13"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className="
          mt-1 font-semibold
          text-xs
          sm:text-xs
          xs:text-[10px]
        "
        style={{ color: "#8B5CF6", letterSpacing: 0.5 }}
      >
        BACK TO TOP
      </span>
    </button>
  );
};

export default BackToTop;
