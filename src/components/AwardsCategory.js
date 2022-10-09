import React from "react";
import "./AwardsCategory.css";
import ellipse from "./images/circle.png";

import prod1 from "./images/prod1.webp";
import prod2 from "./images/prod2.webp";
import prod3 from "./images/prod3.webp";
import prod4 from "./images/prod4.webp";
import prod5 from "./images/prod5.webp";

import launch1 from "./images/prod6.webp";
import launch2 from "./images/prod7.webp";
import launch3 from "./images/prod8.webp";
import launch4 from "./images/prod6.webp";
import launch5 from "./images/prod1.webp";

import brand1 from "./images/prod2.webp";
import brand2 from "./images/prod3.webp";
import brand3 from "./images/prod4.webp";
import brand4 from "./images/prod5.webp";
import brand5 from "./images/prod7.webp";

import brand_logo1 from "./images/prod.webp";
import brand_logo2 from "./images/prod_launch.webp";
import brand_logo3 from "./images/brand.webp";

// data for images
const data = [
  { image_url: brand1 },
  { image_url: brand2 },
  { image_url: brand3 },
  { image_url: brand4 },
  { image_url: brand5 },

  { image_url: launch1 },
  { image_url: launch2 },
  { image_url: launch3 },
  { image_url: launch4 },
  { image_url: launch5 },

  { image_url: prod1 },
  { image_url: prod2 },
  { image_url: prod3 },
  { image_url: prod4 },
  { image_url: prod5 },
];

const totalProds = data.length;
const tiltConstant = 360 / totalProds;

export default function AwardCategory() {
  const [category, setCategory] = React.useState(0);
  const catRef = React.useRef(0);
  const handleRef = () => {
    if (catRef.current === 2) {
      catRef.current = 0;
    } else {
      catRef.current += 1;
    }
    setCategory(catRef.current);
  };
  React.useEffect(() => {
    setInterval(() => {
      handleRef();
    }, 6000);
  }, []);

  const Product = ({ item, index }) => {
    const tiltMultiplier = index + 1;
    return (
      <img
        alt="product"
        src={item.image_url}
        className={
          "productImage " +
          (category === 0
            ? "rotate0"
            : category === 1
            ? "rotate60"
            : "rotate120")
        }
        style={{ "--tilt": `${tiltConstant * tiltMultiplier}deg` }}
      />
    );
  };
  return (
    <section className="categorySec bg-brown" id="category">
      <div className="innerDiv">
        <div className="section_title">
          <h2 className="text-white">AWARDS CATEGORIES</h2>
        </div>
        <div className="awardsCategoryMainnnn">
          <h3
            className={category === 0 ? "onScreenHeading" : "offScreenHeading"}
          >
            Brand of the year
          </h3>
          <h3
            className={category === 1 ? "onScreenHeading" : "offScreenHeading"}
          >
            Product of the year
          </h3>
          <h3
            className={category === 2 ? "onScreenHeading" : "offScreenHeading"}
          >
            Product launch of the year
          </h3>
          {category === 0 && (
            <p className="frontText">
              The Brand of the Year is a distinctive and premier recognition for
              a brand recognized as a champion in its industry category based on
              current year market standing and consumer preference.
            </p>
          )}
          {category === 1 && (
            <p className="frontText">
              The Product of the Year Award celebrates the best products in the
              market in different categories of FMCG products and rewards
              manufacturers for quality, strategy, marketing and other
              parameters.
            </p>
          )}
          {category === 2 && (
            <p className="frontText">
              The Product Launch of the Year Award celebrates the efforts of
              FMCG companies who continuously develop new products, brand
              extensions and packaging updates to meet the new industry
              standards and demands of the consumers.
            </p>
          )}
          <div className="clippedCircle">
            <img
              alt="ellipse dashed line"
              src={ellipse}
              className={
                "ellipseDashed " +
                (category === 0 ? "rotate30" : category === 1 ? "rotate60" : "")
              }
            />
            <div
              className={
                "productContainer " +
                (category === 0 ? "cat1Products" : "cat2Products")
              }
            >
              {data.map((item, index) => (
                <Product item={item} index={index} key={index} />
              ))}
              <img
                alt="logo"
                src={brand_logo3}
                className={
                  "brandLogo " + (category === 0 ? "comeUp" : "goDown")
                }
              />
              <img
                alt="logo"
                src={brand_logo1}
                className={
                  "brandLogo " + (category === 1 ? "comeUp" : "goDown")
                }
              />
              <img
                alt="logo"
                src={brand_logo2}
                className={
                  "brandLogo " + (category === 2 ? "comeUp" : "goDown")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
