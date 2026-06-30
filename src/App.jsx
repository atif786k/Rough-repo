import React, { Suspense, useRef, useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import SplineMCPDemo from "./components/SplineMCPDemo";
import Responsive from "./components/Responsive";
import HeroSection from "./components/HeroSection";
import AudienceTabs from "./components/AudienceTabs";
import PlatformShowcase from "./components/PlatformShowcase";
import MorningComparisonSection from "./components/MorningComparisonSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const [bottle, setBottle] = useState(null);
  const bottleRef = useRef();

  useEffect(() => {
    if (bottleRef.current) {
      setBottle(bottleRef.current);
    }
  }, [bottleRef.current]);

  function onLoad(spline) {
    const obj = spline.findObjectByName("Cylinder");
    if (obj) {
      bottleRef.current = obj;
      setBottle(obj);
      console.log("Bottle object found:", obj);
    } else {
      console.error("Bottle object not found");
    }
  }

  function moveObj() {
    if (bottle) {
      bottle.position.x += 200;
      console.log("Bottle moved to:", bottle.position.x);
    } else {
      console.error("Bottle object is not set");
    }
  }

  return (
    <>
      {/* Spline Model :- */}
      {/* <div className="D-model">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/n8qxIhz6tOGUm1hv/scene.splinecode"
        />
        </Suspense>
      </div>
      <h1 className="behind-text">Bottle</h1>
      <button type="button" onClick={moveObj}>
        Move Bottle
      </button> */}

      {/* <Form/>
      <Table/> */}
      {/* <SplineMCPDemo/> */}
      {/* <Responsive/> */}
      {/* <div className="min-h-screen bg-white"> */}
        <HeroSection />
        <AudienceTabs/>
        <PlatformShowcase/>
        <MorningComparisonSection/>
        <Testimonials/>
        <Footer/>
      {/* </div> */}
    </>
  );
};

export default App;
