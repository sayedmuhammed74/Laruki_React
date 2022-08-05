import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer class="footer bg-dark">
        <div class="container grid grid-3">
            <div>
                <h1>Laruki</h1>
                <p>Copyright &copy; 2020</p>
            </div>
            <nav>
                <ul class="flex">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/docs">Docs</Link></li>
                </ul>
            </nav>
            <div class="social flex">
                <a href="#"><div><img src={require("./images/social/174855.png")} alt="" /></div></a>
                <a href="#"><div><img src={require("./images/social/mark-github-512.png")} alt="" /></div></a>
                <a href="#"><div><img src={require("./images/social/facebook-512.png")} alt="" /></div></a>
                <a href="#"><div><img src={require("./images/social/logo-twitter-icon-symbol-0.png")} alt="" /></div></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer