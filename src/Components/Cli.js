import React from 'react'

function Cli() {
  return (
    <section class="cli">
        <div class="container grid">
            <img src={require("./images/cli.png")} alt="" />
            <div class="card">
                <h3>Easy to use, cross platform cli</h3>
            </div>
            <div class="card">
                <h3>Deploy in seconds</h3>
            </div>
        </div>
    </section>
  )
}

export default Cli