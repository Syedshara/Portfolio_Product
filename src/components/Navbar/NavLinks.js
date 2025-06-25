import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"

const NavLinks = ({ scrolled }) => {
  const location = useLocation()
  const isContactPage = location.pathname === "/contact"
  const { navigation } = useAppContext()

  const baseLinkClass = `px-4 font-extrabold transition duration-300 ease-in-out`

  const getTextColor = () => {
    if (scrolled) return "text-gray-900 hover:text-primary"
    if (isContactPage) return "text-black hover:text-primary"
    return "text-gray-200 hover:text-primary"
  }

  return (
    <>
      {navigation.items.map((item, index) => (
        <HashLink key={index} className={`${baseLinkClass} ${getTextColor()}`} smooth to={item.href}>
          {item.name}
        </HashLink>
      ))}
      <HashLink
        className="text-white bg-primary inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl hover:bg-opacity-90 transition duration-300 ease-in-out"
        smooth
        to={navigation.cta.href}
      >
        {navigation.cta.name}
      </HashLink>
    </>
  )
}

export default NavLinks
