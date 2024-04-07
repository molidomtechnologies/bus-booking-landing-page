import React, { ReactNode } from "react"
import Footer_Component from "./Footer"



interface LayoutProps {
  children: ReactNode
}

const LayOutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
     
        <main>{children}</main>
         <Footer_Component/>
    
    </>
  )
}


export default LayOutComponent