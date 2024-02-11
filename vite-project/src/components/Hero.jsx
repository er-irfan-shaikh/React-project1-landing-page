import React from "react";
import shoe from "../assets/shoe_image.svg";
import flipkart from "../assets/flipkart.svg";
import amazon from "../assets/amazon.svg";

const Hero = () => {
  return (
    <section>
      <div className="left">
        <h1>
          YOUR FEET DESERVE
          <br /> THE BEST
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="selection">
          <button className="Shop">Shop Now</button>
          <button className="Category">Category</button>
        </div>
        <div className="ecom">Also Available On</div>
        <div className="icon">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
        </div>
      </div>
      <div className="right">
        <img src={shoe} alt="shoe" />
      </div>
      
    </section>
  );
};

export default Hero;
