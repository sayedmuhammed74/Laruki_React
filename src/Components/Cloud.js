import React from 'react'
import {Link} from 'react-router-dom'
function Cloud() {
  return (
    <section class="cloud bg-primary my-2 py-2">
        <div class="container grid">
            <div class="text-center">
                <h2 class="lg">Extreme Cloud Hosting</h2>
                <p class="lead my-1">
                    Cloud Hosting like you've never seen.
                    Fast, efficient and scalable
                </p>
                <Link to="/features" class="btn btn-dark">Read More</Link>
            </div>
            <img src={require("./images/cloud.png")} alt="" />
        </div>
    </section>
  )
}

export default Cloud