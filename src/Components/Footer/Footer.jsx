import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'



function Footer() {
    return (
        <footer className="bg-zinc-900 py-10">
          <div className="container mx-auto px-4 flex flex-col items-center over">
            <p className="text-gray-600">&copy; ELEVEN 2024</p>
            <div className="flex mt-4 space-x-4">
              <Link to={"/"} aria-label="Facebook">
                <FaFacebook className="text-gray-600 hover:text-zinc-100" />
              </Link>
              <Link to={"/"}  aria-label="Instagram">
                <FaInstagram className="text-gray-600 hover:text-zinc-100" />
              </Link>
              <Link to={"/"} aria-label="Twitter">
                <FaTwitter className="text-gray-600 hover:text-zinc-100" />
              </Link>
              <Link to={"/"} aria-label="GitHub">
                <FaGithub className="text-gray-600 hover:text-zinc-100" />
              </Link>
              <Link to={"/"} aria-label="YouTube">
                <FaYoutube className="text-gray-600 hover:text-zinc-100" />
              </Link>
            </div>
          </div>
        </footer>
      );
    
}

export default Footer
