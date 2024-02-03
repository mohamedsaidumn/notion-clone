import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        console.log(window.scrollX);
        console.log(window.scrollY);
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]); // Re-run the effect when the threshold value changes

  return scrolled; // Return the current scrolled state
};
