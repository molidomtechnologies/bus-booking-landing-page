
import { FaBars, FaTimes } from 'react-icons/fa'
import {  FaInfoCircle } from 'react-icons/fa'
import {  useEffect, useRef, useState } from 'react'



const NavigationBarComponent = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
 
  //  handle the mobile menu for the navigation bar
  const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (e: MouseEvent) => {
          if (!menuRef.current?.contains(e.target as Node)) {
            setMobileNavOpen(false)
          }
        }
    
        document.addEventListener('mousedown', handler)
    
        return () => {
          document.removeEventListener('mousedown', handler)
        }
      }, [menuRef])
    
      const toggleMobileMenu = () => {
        setMobileNavOpen(!mobileNavOpen)
      }

 
  return (
    <>
      <nav >
        <div className="max-w-7xl    md:mx-auto  mt-2 px-2 md:px-6 lg:px-8">
          <div className="relative  flex items-center justify-between h-10">
            {/* APP LOGO  */}
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <button >
                <h1 className="mt-2  md:block h-8 w-auto text-PrimaryMain">
                  AppName
                </h1>
              </button>
            </div>

            {/*   TOGGLE  MENU */}
            <div className="absolute inset-x0 left-0 flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex transition duration-400  bg-primaryColor items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileNavOpen ? 'true' : 'false'}
              >
                {mobileNavOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>

            {/* END TOGGLE MENU */}

            {/* 
              
              ===============================
              NAV ITEMS 
              ======================
            
              */}
            <div className="hidden  md:block md:ml-6">
              <div className="flex space-x-4">
                {/* HOME */}

                <button
                 
                  className="px-3 py-2 flex flex-row rounded-md text-sm text-gray-700"
                >
                  <span> Home </span>
                </button>

               

                {/* About */}
                <button className="px-3 py-2 flex flex-row rounded-md text-sm text-gray-700">
                  <span>About</span>
                </button>


               
              </div>
            </div>

          
          </div>
        </div>

        {/*
          
          *
          =========================
          MOBILE NAVIGATION  Menu
         ===================
         
        
          
          */}

        <section className="z-50 ">
          <div
            className={`${
              mobileNavOpen ? 'block' : 'hidden'
            } md:hidden bg-white shadow-2xl    h-80 transition duration-400   w-ful       flex flex-col gap-10  text-medium  p-7 pt-10 right-0  duration-500 `}
            id="mobile-menu"
          >
            <div className="px-4 py-2 flex flex-col w-full   gap-2 bg-white">
              {/* Service */}
             

              {/* About */}
              <button className="block py-2 px-4 text-base font-medium  border-b text-Black bg-transparent hover:bg-Grey rounded-md text-left">
                <FaInfoCircle className="inline-block mr-2" />
                About
              </button>

              {/* Currency */}
              

            
            </div>
          </div>
        </section>

        {/*  END OF MOBILE NAVIGATION  */}
      </nav>

      {/*  ================   This   section contain the form modal components  */}
    </>
  )
}

export default NavigationBarComponent
