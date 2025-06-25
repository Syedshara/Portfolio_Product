"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// All pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import DemoProduct from "./pages/DemoProduct"

import { useDocTitle } from "./components/CustomHook"
import ScrollToTop from "./components/ScrollToTop"
import { useAppContext } from "./context/AppContext"

function App() {
  const { pageTitles, animations } = useAppContext()

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: animations.aos.once,
        duration: animations.aos.duration,
        easing: animations.aos.easing,
      })
    }

    window.addEventListener("load", () => {
      aos_init()
    })
  }, [animations.aos])

  useDocTitle(pageTitles.home)

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
