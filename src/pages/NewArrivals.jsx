import { transform } from "framer-motion";
import React, {useLayoutEffect, useRef} from "react";
import styled from "styled-components";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from '../assets/Images/11.webp'
import img2 from '../assets/Images/12.webp'
import img3 from '../assets/Images/13.webp'
import img4 from '../assets/Images/14.webp'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: yellow; */
`;
const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  /* background-color: yellow; */
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  z-index: 11;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.font3xl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.font2xl};
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
  /* top: 1rem; */
  z-index: 11;
`;

const Container = styled.div`
  /* width: 65%; */
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: 200vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  img {
    width: 100%;
    height: auto;
    z-index: 5;
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

    >
      <img width="400" height="600" src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const NewArrivals = () => {

  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null)
  const verticalRef = useRef(null)

  useLayoutEffect(() => {

    let element = containerRef.current;
    let scrollingElement = verticalRef.current;
    // let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App',
          scrub: true,
          pin: true,
        },

        ease: 'none',
      })

      // Vertical Scrolling
      t1.fromTo(scrollingElement,
        {
          y: '0',
        }
        ,
        {
          y: '-100%',
        scrollTrigger: scrollingElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        scroller: '.App',
      })
      ScrollTrigger.refresh()

    }, 1000)

  }, [])

  return (
    <Section ref={containerRef}>
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-4"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>

      <Container ref={verticalRef}>
        <Product img={img1} title="Man Basics" />
        <Product img={img2} title="Tops" />
        <Product img={img3} title="Sweatshirts" />
        <Product img={img4} title="Ethnic Wear" />
      </Container>

      <Text data-scroll data-scroll-speed="-6">
        There is new collection available for cool clothes in all sizes. This
        collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also
        find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men.
        The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </Text>
    </Section>
  );
};

export default NewArrivals;
