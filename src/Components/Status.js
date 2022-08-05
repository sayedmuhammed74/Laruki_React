import React from 'react'

function Status() {
  return (
    <section class="stats">
        <div class="container">
            <h3 class="stats-heading text-center my-1">
                Welcome to the best platform fr biulding applications of all types with modern architecture and scaling
            </h3>

            <div class="grid grid-3 text-center my-4">
                <div>
                    <h3>10,349,405</h3>
                    <p class="text-secondary">Deployments</p>
                </div>
                <div>
                    <h3>987 TB</h3>
                    <p class="text-secondary">Published</p>
                </div>
                <div>
                    <h3>2,343,265</h3>
                    <p class="text-secondary">Projects</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Status