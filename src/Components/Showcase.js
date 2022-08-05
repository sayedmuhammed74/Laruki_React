import React from 'react'
import { Link } from 'react-router-dom'

function Showcase() {
  return (
    <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Easier Deployment</h1>
                <p>Deploy Web apps of all kinds, from
                large scale interprise APIs To static
                Websites for individuals. Fill out the
                form to try a demo of our platform
                </p>
                <Link to="/features" class="btn btn-outline">Read More</Link>
            </div>
            <div class="showcase-form card">
                <h2>Request a Demo</h2>
                <form>
                    <div class="form-control">
                        <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div class="form-control">
                        <input type="text" name="company" placeholder="Company Name" required />
                    </div>
                    <div class="form-control">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <input type="submit" value="Send" class="btn btn-primary" />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Showcase