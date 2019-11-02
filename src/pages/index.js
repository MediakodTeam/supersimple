import React from "react"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Supersimple" />
    <main class="flex-centered">
      <div>
        <h1>Supersimple, agence de sensibilisation et formation à l'accessibilité, l'ergonomie, les performances, l'éco-conception et l'éthique</h1>
        <p>Nous vous sensibilisons à une approche numérique inclusive et bienveillante au travers de cinq notions importantes: </p>
        <nav>
          <ul>
            <li><a href="#accessiblite">l'accessibilité</a></li> 
            <li><a href="#ergonomie">l'ergonomie</a></li>
            <li><a href="#performances">les performances</a></li>
            <li><a href="#eco-conception">l'éco-conception</a></li>
            <li><a href="#ethique">l'éthique</a></li>
          </ul>
        </nav>
      </div>
    </main>
    <section id="accessibilite">
      <h2>L'accessibilité</h2>
    </section>
    <section id="ergonomie">
      <h2>L'ergonomie</h2>
    </section>
    <section id="performances">
      <h2>Les performances</h2>
    </section>
    <section id="eco-conception">
      <h2>L'éco-conception</h2>
    </section>
    <section id="ethique">
      <h2>L'éthique</h2>
    </section>
  </Layout>
)

export default IndexPage
