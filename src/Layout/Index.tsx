import React, { ReactNode } from "react"
import Footer_Component from "./Footer"
import NavigationBarComponent from "./NavBar"



interface LayoutProps {
  children: ReactNode
}

const LayOutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavigationBarComponent/>
        <main>{children}</main>
         <Footer_Component/>
    
    </>
  )
}


export default LayOutComponent