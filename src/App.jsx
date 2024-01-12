import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from "./pages/Home";

function App() {
  const containerRef = useRef(null);

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
          <main data-scroll-container className="" ref={containerRef}>
            <Home />
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
