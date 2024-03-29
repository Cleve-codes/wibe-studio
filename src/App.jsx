import React, { useEffect, useRef, useState } from "react";

// Styles
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

// Locomotive Scroll
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Banner from './pages/Banner'
import NewArrivals from "./pages/NewArrivals";
import Footer from "./pages/Footer";
import Loader from "./components/Loader";

function App() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {

    setTimeout(() => {
        setLoaded(true)
    }, 3000)

  }, [])

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
            {loaded ? null :<Loader />}
          </AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main data-scroll-container className="App" ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrivals />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
