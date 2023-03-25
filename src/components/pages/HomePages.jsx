import React from "react"
import Home from "../home/homes/Home"
import Branding from "../home/Branding"
import About from "../home/about/About"
import Services from "../home/servicess/Services"
import Wrapper from "../home/Wrapper"
import WrapperOne from "../home/WrapperOne"
import Blog from "../home/blog/Blog"


const HomePages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Services />
      <Wrapper />
      <WrapperOne />
      <Blog />
    </>
  )
}

export default HomePages
