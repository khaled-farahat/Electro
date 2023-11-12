import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Articles from "./components/Articles/Articles";
import Gallery from "./components/Gallery/Gallery";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Events from "./components/Events/Events";
import Pricing from "./components/Pricing/Pricing";

// import { useState } from "react";

function App() {
  // const [themeMode, setThemeMode] = useState("light");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
        light: " #2196f3",
        dark: " #2196f3",
      },
      secondary: {
        main: "#1787e0",
        light: "#1787e0",
        dark: "#1787e0",
      },
      third: {
        main: "#666",
        light: "#666",
        dark: "#666",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Landing />
        <Articles />
        <Gallery />
        <Features />
        <Testimonials />
        <TeamMembers />
        <Services />
        <Skills />
        <Work />
        <Events />
        <Pricing />
      </ThemeProvider>
    </>
  );
}

export default App;
