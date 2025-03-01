"use client"
import React, { useState, useEffect } from "react"
import { Menu } from "lucide-react"
interface NavLinkProps {
  text: string
  link: string
  active?: boolean
  isLast?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({
  text,
  link,
  active,
  isLast = false,
}) => {
  const NAVBAR_HEIGHT = 50

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    const sectionId = link.replace("/#", "")
    const section = document.getElementById(sectionId)

    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  return (
    <a
      href={link}
      onClick={handleClick}
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
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  const navLinks = [
    { text: "home", link: "/#home", active: true },
    { text: "about", link: "/#about" },
    { text: "visit", link: "/#visit", isLast: true },
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
              active={link.link.slice(2) === activeLink}
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
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className='bg-black px-4 py-4 md:hidden'>
          <div className='flex flex-col space-y-4'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className={`text-white uppercase ${
                  link.link.slice(2) === activeLink
                    ? "border-b border-white"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault() // Prevent URL change
                  setActiveLink(link.link.slice(2)) // Update active section
                  document.getElementById(link.link.slice(2))?.scrollIntoView({
                    behavior: "smooth",
                  }) // Scroll to section smoothly
                  setIsOpen(false) // Close menu
                }}
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
