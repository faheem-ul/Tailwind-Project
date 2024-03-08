import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import HomePage from "./pages.jsx/landing";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div>
        <HomePage />
      </div>
    </>
  );
}

export default App;
