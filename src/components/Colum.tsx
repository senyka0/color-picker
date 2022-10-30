import React, { useState, useEffect } from "react";
import styled from "styled-components";
import chroma from "chroma-js";

const Colum: React.FC = () => {
  useEffect(() => {
    changeColor();
  }, []);

  const [textColor, setTextColor] = useState<"black" | "white">();
  const [color, setColor] = useState<string>("white");

  const changeColor = () => {
    const hexCodes = "0123456789ABCDEF";
    let col = "";
    for (let i = 0; i < 6; i++) {
      col += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    setColor(`#${col}`);
    setTextColor(chroma(`#${col}`).luminance() > 0.5 ? "black" : "white");
  };
  const handleClick = (event: any) => {
    if (event.target.localName === "div") {
      changeColor();
    } else if (event.target.localName === "p") {
      navigator.clipboard.writeText(color);
    }
  };
  const ColumWrapper = styled.div`
    flex-direction: column;
    height: 100vh;
    width: 100ch;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color};
    color: ${textColor};
    p:hover {
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  `;
  return (
    <ColumWrapper onClick={(e) => handleClick(e)}>
      <p onClick={(e) => handleClick(e)}>{color}</p>
    </ColumWrapper>
  );
};

export default Colum;
