import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  function updateWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  function adjustVH() {
    const htmlElement = document.getElementsByTagName("html")[0];
    const maxRatio = 0.75;
    let maxHeight = innerWidth * maxRatio;
    const adjustedHeight = Math.min(innerHeight, maxHeight);

    htmlElement.style.setProperty("--vh", adjustedHeight / 110 + "px");
  }

  useEffect(() => {
    document.onkeydown = (e) => {
      e = e || window.event;
      if (e.keyCode === 37) {
        changePage(-1);
      } else if (e.keyCode === 39) {
        changePage(1);
      }
    };

    window.addEventListener("resize", () => {
      updateWindowSize();
      adjustVH();
    });

    adjustVH();
    updateWindowSize();

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);
  return windowSize;
}
