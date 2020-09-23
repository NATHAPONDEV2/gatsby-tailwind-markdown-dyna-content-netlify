import React from "react"
import { Link } from "gatsby"
// import "../components/layout.css"

const menu = () => (

        <div className="bg-white-500 h-18 w-18 hidden md:block">

            <ul className="flex">

                <Link className="p-4 text-gray-600" to="/">Home</Link>
                <Link className="p-4 text-gray-600" to="/page-2/">2nd Page</Link>
                <Link className="p-4 text-gray-600" to="/about/">About</Link>
                <Link className="p-4 text-gray-600" to="/blog/">Blog</Link>

            </ul>

        </div> 

)

export default menu;
