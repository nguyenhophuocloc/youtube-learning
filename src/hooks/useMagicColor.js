import { useEffect, useRef, useState } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ["red", "green", "yellow"];

  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  return COLOR_LIST[newIndex];
}

function useMagicColor(props) {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("");
  //change color every 1 seconds
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      //truyền vào ref
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
