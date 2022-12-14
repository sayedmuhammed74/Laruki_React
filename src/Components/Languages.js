import React from 'react'

function Languages() {
  return (
    <section class="languages py-2">
        <h2 class="md text-center my-2">
            Supported Languages
        </h2>
        <div class="container flex">
            <div class="card">
                <h4>Node.js</h4>
                <img src={require("./images/logos/node.png")} alt="" />
            </div>
            <div class="card">
                <h4>Python</h4>
                <img src={require("./images/logos/python.png")} alt="" />
            </div>
            <div class="card">
                <h4>C#</h4>
                <img src={require("./images/logos/csharp.png")} alt="" />
            </div>
            <div class="card">
                <h4>Ruby</h4>
                <img src={require("./images/logos/ruby.png")} alt="" />
            </div>
            <div class="card">
                <h4>PHP</h4>
                <img src={require("./images/logos/php.png")} alt="" />
            </div>
            <div class="card">
                <h4>Scala</h4>
                <img src={require("./images/logos/scala.png")} alt="" />
            </div>
            <div class="card">
                <h4>Clojure</h4>
                <img src={require("./images/logos/clojure.png")} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Languages