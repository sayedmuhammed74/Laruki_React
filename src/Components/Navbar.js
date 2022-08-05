import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
        <div class="navbar">
            <div class="container flex">
                <h1 class="logo">Lorkui.</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/docs">Docs</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar