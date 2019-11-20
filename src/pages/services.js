import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Supersimple, nos services" />
    <main id="main" className="flex-centered content-inline">
      <div className="main-content">
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
      <div className="inner">
        <h2>L'accessibilité</h2>
        <p>L'accessibilité web offre beaucoup d'avantages pour des interactions positives entre vos solutions de vos audiences. Elle ne se résume pas seulement au fait de répondre à des besoins de personnes souffrant de déficiences. Elle facilite aussi les interactions des personnes dans l'urgence, stressées ou déconcentrées par leur environnement.</p> 
        <p>Avec nos ateliers, nous vous guidons aux travers des normes et bonnes pratiques en vigueur afin d'offrir un accès à votre information pour le plus grand nombre.</p>
      </div>
    </section>
    <section id="ergonomie">
      <div className="inner">
        <h2>L'ergonomie</h2>
        <p>Proposer des interfaces intuitives et une expérience attractive n'est pas toujours chose aisée. Nous vous aidons à ne pas tomber dans le piège de la complexité en apportant un point de vue externe neuf à votre projet.</p>
        <p>Selon votre projet et son avancement, il est possible de faire appel à nos services pour des points d'interventions spécifiques ou pour un audit général.</p>
      </div>
    </section>
    <section id="performances">
      <div className="inner">
        <h2>Les performances</h2>
        <p>La notion de rapidité est le plus souvent associée aux technologie. Pour autant, fournir <strong>l'information pertinente</strong> recherchée par vos audiences est le premier critère de performance. En parallèle, proposer des solutions techniques qui s'adaptent au contexte de vos utilisateurs (faible réseau, mode hors-connexion) sont aussi à envisager.</p>
        <p>Nous vous présentons ces deux philosophies au travers de nos ateliers et collaborons avec vos rédacteurs, intégrateurs et développeurs.</p>
      </div>
    </section>
    <section id="eco-conception">
      <div className="inner">
        <h2>L'éco-conception</h2>
        <p>Savez-vous que toute solution en ligne génère du carbone mais qu'il est possible de minimiser l'impact de vos serveurs aux travers de tout une série de bonnes pratiques ? Les serveurs web, leur localisation et les sources d'énergie utilisées sont un facteur important dont il faut avoir désormais conscience. </p>
        <p>Nous vous sensibilisons et formons vos développeurs à opter pour des infrastructures techniques et des solutions numériques qui réduisent votre impact sur l'environnement.</p>
      </div>
    </section>
    <section id="ethique">
      <div className="inner">
        <h2>L'éthique</h2>
        <p>Avoir une démarche bienveillante envers ses audiences n'est pas si simple dans les domaines du web. On est parfois étonné d'apprendre que certains outils en ligne, simple à intégrer à vos produits, collectent des informations sur vos visiteurs dans leur propre intérêt. Nous mettons en exergue ces mauvaises pratiques et vous proposons des solutions pour éviter ces pièges.</p>
      </div>
    </section>
    <section id="ethique">
      <div className="inner">
        <h2>Vous hésitez à nous contacter ?</h2>
        <p>Nous aimons beaucoup échanger sur ces sujets qui nous tiennent à coeur. <Link to="/contact/">Planifions une simple entrevue</Link> afin de discuter de vos projets futurs et de vos solutions actuelles. Cela ne vous engage à rien et vous sensibiliser à ces bonnes pratiques sera déjà un grand pas pour nous.</p>
      </div>
    </section>
  </Layout>
)

export default ServicesPage
