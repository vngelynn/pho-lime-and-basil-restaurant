import React, { useState } from "react"

interface NavLinkProps {
  text: string
  link: string
  active?: boolean
  isLast?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({
  text,
  link,
  active = false,
  isLast = false,
}) => {
  return (
    <a
      href={link}
      className={`
        text-white uppercase tracking-wider hover:border-b-2 border-white transition-colors duration-200
        ${active ? "text-gray-200 font-semibold" : ""}
        ${isLast ? "" : "mr-8"}
        text-sm md:text-base font-medium
      `}
    >
      {text}
    </a>
  )
}

const FixedNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState('home')


 // actually should consider use case when scrolling to section 
  // create new state for active where options are text
  // active by default is home
  // on click, change active to link.text
  // if active is equal to link.text then keep that active styling
  // check if top works, if it does, remove all uses of active

  const navLinks = [
    { text: "home", link: "#", active: true },
    { text: "about", link: "#about" },
    { text: "visit", link: "#visit", isLast: true },
    // { text: "GALLERY" },
    // { text: "JOIN OUR TEAM" },
    // { text: "CONTACT", isLast: true },
  ]

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <nav className='bg-black py-4 px-4 md:px-8'>
        {/* Desktop Navigation */}
        <div className='hidden md:flex justify-center items-center'>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              text={link.text}
              link={link.link}
              active={link.active}
              isLast={link.isLast}
            />
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className='md:hidden flex justify-between items-center'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white text-lg'
          >
            MENU
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className='bg-red-900 px-4 py-4 md:hidden'>
          <div className='flex flex-col space-y-4'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className={`text-white uppercase ${
                  link.active ? "border-b border-white" : ""
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export { FixedNavbar }
