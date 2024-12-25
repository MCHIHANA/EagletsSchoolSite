import React from "react";
import Headerz from "./Components/Header";
import LandingPage from "./Components/LandPage";
import Footerpage from "./Components/Footer";
import Schoolproject from "./Components/Projects";
import SchoolCategories from "./Components/categories";
import Enviro from "./Components/enviro";

const App = () => {
  return (
    <div className="font-sans">
 <Headerz />
 <LandingPage />
 <Schoolproject />
 <SchoolCategories />
 <Enviro />
 <Footerpage />
    </div>
  );
};
export default App;