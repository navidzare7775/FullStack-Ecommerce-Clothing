import { useEffect, useState } from "react";
import style from "./BacktoTopButton.module.css";

const BacktoTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }

      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`${showButton ? `${style.show}`: ""} ${style.ScrollToTop}`}
      style={{ display: showButton ? "block" : "none" }}
    >
      <img src="../../public/Arrow_Up.svg" alt="Up Arrow" />
    </button>
  );
};

export default BacktoTopButton;
