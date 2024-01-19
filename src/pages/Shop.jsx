import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/kibla.jpg";
import img2 from "../assets/Images/afro.jpg";
import img3 from "../assets/Images/bald.jpg";
import img4 from "../assets/Images/locs.jpg";
import img5 from "../assets/Images/brown1.jpg";
import img6 from "../assets/Images/pink.jpg";
import img7 from "../assets/Images/afro2.jpg";
import img8 from "../assets/Images/creative.jpg";
import img9 from "../assets/Images/dark1.jpg";
import img10 from "../assets/Images/last.jpg";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.font3xl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = sectionRef.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let tl = gsap.timeline();
    // console.log(pinWrapWidth);

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `bottom bottom`,
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });
      // ScrollTrigger.refresh();

      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top center",
          end: "bottom center",
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      // tl.kill();
      // ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        New Collection
      </Title>
      <Left>
        <p>
          Immerse yourself in the allure of Pendeza's latest collection,
          crafted with meticulous attention to detail and a touch of glamour.
          Each piece is a testament to our commitment to excellence,
          meticulously developed in the vibrant city of Nairobi, Kenya.
          <br /> <br />
          At Pendeza, we pride ourselves on using only the finest materials,
          ensuring that every garment, from exquisite dresses to stylish shoes,
          is a masterpiece of luxury and comfort. Elevate your wardrobe with our
          exclusive range, where each outfit is designed to make you stand out
          and feel extraordinary. Explore the beauty of our new collection and
          let Pendeza redefine your style with unparalleled elegance.
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img1} title="Shaving Oil" />
        <Product img={img2} title="Natural Hair" />
        <Product img={img3} title="Natural Hair-Dye" />
        <Product img={img4} title="Dreadlocks" />
        <Product img={img5} title="Layered Cut" />
        <Product img={img6} title="Top knot" />
        <Product img={img7} title="Shag" />
        <Product img={img8} title="Straight 'n Sleek" />
        <Product img={img9} title="Afro Hair" />
        <Product img={img10} title="Traditional Braiding" />
      </Right>
    </Section>
  );
};

export default Shop;
