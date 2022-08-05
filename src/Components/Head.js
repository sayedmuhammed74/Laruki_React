import React from 'react'

function Head() {
  return (
    <section class="features-head bg-primary py-3">
        <div class="container grid">
            <div>
                <h1 class="xl">Features</h1>
                    <p class="lead">
                        Check out the featiures of Loruki that separate us from the competition
                    </p>
            </div>
            <img src={require("./images/server.png")} alt="" />
        </div>
    </section>
  )
}

export default Head