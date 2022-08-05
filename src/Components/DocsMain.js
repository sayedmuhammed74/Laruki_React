import React from 'react'

function DocsMain() {
  return (
    <>
        <section class="docs-main my-4">
            <div class="container grid">
                <div class="card p-3 bg-light">
                    <h3 class="my-2">Essentials</h3>
                    <nav>
                        <ul>
                            <li><a class="text-primary" href="#">Introduction</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Installation</a></li>
                        </ul>
                    </nav>

                    <h3 class="my-2">Deplyment</h3>
                    <nav>
                        <ul>
                            <li><a href="#">Introduction</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Installation</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="card">
                    <h2>Introduction</h2>
                    <p class="lead">
                        Check out the featiures of Loruki that separate us from the competition
                    </p>

                    <div class="alert alert-success">
                        Check out the featiures of Loruki that separate us from the competition
                    </div>
                    
                    <h3>Sayed, Laruki</h3>
                    <p>Check out the featiures of Loruki that separate us from the competition</p>
                    <a href="#" class="btn btn-primary">Install Cli</a>
                
                    <h3>Requirements</h3>
                    <ul>
                        <li>Window 10 , Mac OSX, Linux</li>
                        <li></li>
                    </ul>
                
                    <h3>Install</h3>
                    <p>Mac (homebrew)</p>
                    <pre><code>$ brew install loruki-cli</code></pre>

                    <h3>Install</h3>
                    <p>Mac (homebrew)</p>
                    <pre><code>$ brew install loruki-cli</code></pre>

                    <h3>Install</h3>
                    <p>Mac (homebrew)</p>
                    <pre><code>$ brew install loruki-cli</code></pre>

                </div>
            </div>
        </section>
    </>
  )
}

export default DocsMain