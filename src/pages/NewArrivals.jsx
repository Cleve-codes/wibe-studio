import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/shoot2.jpg";
import img2 from "../assets/Images/arrival2.jpg";
import img3 from "../assets/Images/more.jpg";
import img4 from "../assets/Images/oil.jpg";
import { useGSAP } from "@gsap/react";

const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
    width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
    width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.font3xl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ img, name }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);

  useGSAP(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "center bottom",
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: "top top",
            end: "center 400",
            scroller: ".App",
            scrub: 1,
            // markers: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      // t1.kill();
      // ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />

      <Title
        data-scroll
        data-scroll-speed="-4"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>

      <Container ref={ScrollingRef}>
        <Photos img={img1} name="Antiques" />
        <Photos img={img2} name="Jewelery" />
        <Photos img={img3} name="More Jewelary" />
        <Photos img={img4} name="Pendeza Oil" />
      </Container>

      <Text data-scroll data-scroll-speed="-4">
        Our new arrivals showcase a diverse range, including a dedicated line
        for men and three new styles tailored for women. Whether you're seeking
        the perfect ensemble for a special event or looking to refresh your
        everyday wardrobe, Eleganzia's new collection has something for
        everyone. Embrace the opportunity to redefine your style, try something
        new, and experience the transformative power of our latest arrivals.
        <br />
        <br />
        This collection is not just about fashion; it's a journey to discover a
        new look that resonates with your unique style. Explore a variety of
        cool apparel styles that cater to your taste, providing options for both
        special occasions and everyday wear.
        <br />
        <br />
        Give it a try and experience a new look.
      </Text>
    </Section>
  );
};

export default NewArrival;
