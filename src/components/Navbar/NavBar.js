"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import NavLinks from "../Navbar/NavLinks"
import { HashLink } from "react-router-hash-link"
import { useAppContext } from "../../context/AppContext"

const NavBar = () => {
  const [top, setTop] = useState(true)
  const [isOpen, setisOpen] = useState(false)
  const location = useLocation()
  const { company } = useAppContext()

  const isContactPage = location.pathname === "/contact"

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
        !top
          ? "bg-white/20 shadow-lg backdrop-blur-md backdrop-saturate-150 text-gray-900"
          : isContactPage
            ? "text-black"
            : "text-white"
      }`}
    >
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#hero">
            <h1
              className={`font-extrabold text-4xl transition duration-300 ease-in-out ${
                !top
                  ? "text-gray-900 hover:text-primary"
                  : isContactPage
                    ? "text-black hover:text-primary"
                    : "text-white hover:text-primary"
              }`}
            >
              {company.name}
            </h1>
          </HashLink>
        </div>
        <div className="group flex flex-col items-center">
          <button
            className={`p-2 rounded-lg lg:hidden transition duration-300 ease-in-out ${
              !top ? "text-gray-900" : isContactPage ? "text-black" : "text-primary"
            }`}
            onClick={() => setisOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden space-x-6 lg:inline-block p-5">
            <NavLinks scrolled={!top} />
          </div>
          <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col space-y-6">
              <NavLinks scrolled={true} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
