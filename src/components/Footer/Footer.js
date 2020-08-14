import React from "react"  
import { Link } from "gatsby"

const Footer = () => {  
  return (
    <>
        <div className="border-t bg-dark-green border-green-700">
            <div className="flex flex-wrap flex-row p-2 text-center container mx-auto lg:w-3/5 justify-center">
                <Link className="inline-block p-2 hover:text-green-500" activeClassName="inline-block p-2 text-green-500" to="/pages/about">About</Link>
                <Link className="inline-block p-2 hover:text-green-500" activeClassName="inline-block p-2 text-green-500" to="/pages/contacts">Contact</Link>
                <Link className="inline-block p-2 hover:text-green-500" activeClassName="inline-block p-2 text-green-500" to="/pages/privacy">Privacy</Link>
                <Link className="inline-block p-2 hover:text-green-500" activeClassName="inline-block p-2 text-green-500" to="/pages/disclaimer">Disclaimer</Link>
            </div>
        </div>
    </>
  )
}

export default Footer