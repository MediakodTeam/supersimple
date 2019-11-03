import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Supersimple, nos services" />
    <main id="main" class="flex-centered content-inline">
      <div class="main-content">
        <h1>Nos services</h1>
        <p>Nous vous sensibilisons à une approche numérique inclusive et bienveillante au travers de formations, d'ateliers ou d'un accompagnement sur mesure afin d'appréhender au mieux les sujets suivants: </p>
        <nav>
          <ul>
            <li><Link to="/services/#accessibilite">l'accessibilité</Link></li> 
            <li><Link to="/services/#ergonomie">l'ergonomie</Link></li>
            <li><Link to="/services/#performances">les performances</Link></li>
            <li><Link to="/services/#eco-conception">l'éco-conception</Link></li>
            <li><Link to="/services/#ethique">l'éthique</Link></li>
          </ul>
        </nav>
      </div>
    </main>
    <section id="accessibilite">
      <h2>L'accessibilité</h2>
      <p>Accéder et consulter vos contenus peut devenir rapidement problématique pour toute personne atteinte de déficiences. Nous vous guidons aux travers des normes et bonnes pratiques en vigueur afin d'offrir un accès à votre information pour le plus grand nombre.</p>
    </section>
    <section id="ergonomie">
      <h2>L'ergonomie</h2>
      <p>Proposer des interfaces intuitives et une expérience attractive n'est pas toujours chose aisée. Nous vous aidons à ne pas tomber dans le piège de la complexité en apportant un point de vue externe neuf à votre projet.</p>
    </section>
    <section id="performances">
      <h2>Les performances</h2>
      <p>Une solution rapide et des contenus pertinents sont gage de bonne performance. Nous disposons d'une expertise large dans les domaines du développement et proposons des méthodes pour optimiser vos outils.</p>
    </section>
    <section id="eco-conception">
      <h2>L'éco-conception</h2>
      <p>Savez-vous que toute solution en ligne génère du carbone mais qu'il est possible de minimiser l'impact de vos serveurs aux travers de tout une série de bonnes pratiques ? Nous vous sensibilisons et formons vos développeurs à celles-ci.</p>
    </section>
    <section id="ethique">
      <h2>L'éthique</h2>
      <p>Avoir une démarche bienveillante envers ses audiences n'est pas si simple dans les domaines du web. On est parfois étonné d'apprendre que certains outils en ligne, simple à intégrer à vos produits, collectent des informations sur vos visiteurs dans leur propre intérêt. Nous mettons en exergue ces mauvaises pratiques et vous proposons des solutions pour éviter ces pièges.</p>
    </section>
  </Layout>
)

export default ServicesPage
