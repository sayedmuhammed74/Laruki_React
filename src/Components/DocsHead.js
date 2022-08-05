import React from 'react'

function DocsHead() {
  return (
    <section class="docs-head bg-primary py-3">
        <div class="container grid">
            <div>
                <h1 class="xl">Docs</h1>
                    <p class="lead">
                        Check out the featiures of Loruki that separate us from the competition
                    </p>
            </div>
            <img src={require("./images/docs.png")} alt="" />
        </div>
    </section>
  )
}

export default DocsHead