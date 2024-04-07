
import { ReactElement } from 'react'
import { footerSocialIcons } from '../Constants/FooterSocial.constant'
import { FooterNavigation } from '../Constants/footerNavigation'

// Footer items

const Footer_Component = (): ReactElement => {
  // App name and company name
  const appName = 'AppName'
  const currentYear = new Date().getFullYear()
  const companyName = `© ${currentYear} ${appName}. All rights reserved.`
  return (
    // Footer component
    <footer>
      <hr className="border-gray-200" />
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* Social media links */}
            <h1 className=" font-semibold text-lg"> Follow us </h1>
            <div className="flex space-x-6">
              {footerSocialIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" text-PrimaryMain  border-PrimaryMain border  rounded-full p-2   hover:text-gray-500"
                >
                  {<item.icon className="h-6 w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Footer navigation */}
        <div className="mt-12 border-t border-gray-200 pt-8 sm:flex md:items-center sm:justify-around">
          <p className="text-2xl   text-Black font-bold">{appName}</p>

          <div className="mt-8 flex space-x-6 md:mt-0  ">
            {FooterNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <p> {item.name} </p>
              </a>
            ))}
          </div>
          {/* Company  */}
          <p className="text-base   flex   text-gray-400     ">{companyName}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer_Component
