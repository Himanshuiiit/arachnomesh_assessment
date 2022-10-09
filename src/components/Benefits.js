import React, { useEffect, useRef, useState } from "react";
import {RoundFunc, getColor, getDelay, getFall} from "./functions"
import "./Benifits.css";

import benefit_1 from "./images/benefit_1.webp";
import benefit_2 from "./images/benefit_2.webp";
import benefit_3 from "./images/benefit_3.webp";
import benefit_4 from "./images/benefit_4.webp";
import SwingingCard from "./SwingingCard";

const swinging_cards = [
  {
    image_url: benefit_1,
    text_1: "Awards trophy",
    text: "Pride",
  },
  {
    image_url: benefit_2,
    text_1: "Certificate of excellence",
    text: "Promotion",
  },
  {
    image_url: benefit_3,
    text_1: "Digital seal",
    text: "Prestige",
  },
  {
    image_url: benefit_4,
    text_1: "Coffee table book",
    text: "Motivation",
  },
];
export const colors = [
  "#FFBF00",
  "#FAB900",
  "#F5B400",
  "#F0AE00",
  "#EBA900",
  "#E6A300",
  "#E19E00",
  "#DC9800",
  "#D79300",
  "#D28D00",
  "#CD8800",
  "#C88200",
  "#C37D00",
];

function BenefitsSection() {
  const [isAnimation, setAnimation] = useState(false);
  const benifit = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (event) => {
        setAnimation(event[0].isIntersecting);
      },
      { threshold: 0.12 }
    );
    observer.observe(benifit.current);
  }, []);


const makeBlobCSS = () => {
  return {
    "--fall-angle": `${getFall()}deg`,
    "--blob-width": `${RoundFunc(20, 25)}vh`,
    "--blob-color": getColor(),
    "--animation-delay": `${getDelay()}ms`,
  };
};
  return (
    <section className="benefitSec" id="benefit">
      <div className="section_title">
        <h2>BENEFITS</h2>
      </div>
      <div className="benifitsMain" ref={benifit}>
        <div className={"blobContainer " + (isAnimation ? "blobFall" : "")}>
          <div style={makeBlobCSS()}>PR</div>
          <div style={makeBlobCSS()}>Increase sales</div>
        </div>
        <div className={"blobContainer " + (isAnimation ? "blobFall" : "")}>
          <div style={makeBlobCSS()}>Exposure</div>
          <div style={makeBlobCSS()}>Positivity</div>
          <div style={makeBlobCSS()}>Recognition</div>
          <div style={makeBlobCSS()}>Networking</div>
          <div style={makeBlobCSS()}>Differentiation</div>
          <div style={makeBlobCSS()}>Showcasing</div>
          <div style={makeBlobCSS()}>Excellence</div>
        </div>
        <div>
          <div className="cardContainer">
            <SwingingCard item={swinging_cards[0]} index={0} isAnimation={isAnimation}/>
            <SwingingCard item={swinging_cards[1]} index={1} isAnimation={isAnimation}/>
          </div>
          <div className="cardContainer">
            <SwingingCard item={swinging_cards[2]} index={2} isAnimation={isAnimation}/>
            <SwingingCard item={swinging_cards[3]} index={3} isAnimation={isAnimation}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;