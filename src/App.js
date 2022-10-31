import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Project from "./components/ProjectPage/Project";
import Contact from "./components/ContactPage/Contact";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./components/ErrorPage";
import EasySoftware from "./components/ProjectPage/EasySoftware";
import Cooperative from "./components/ProjectPage/Cooperative";
import Ecommerce from "./components/ProjectPage/Ecommerce";
import HamiChhimeki from "./components/ProjectPage/HamiChhimeki";
import School from "./components/ProjectPage/TaprizaSchool";
import NGO from "./components/ProjectPage/NGO";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/easy-software" element={<EasySoftware />} />
          <Route path="/cooperative" element={<Cooperative />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/hami-chhimeki" element={<HamiChhimeki />} />
          <Route path="/tapriza-school" element={<School />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
