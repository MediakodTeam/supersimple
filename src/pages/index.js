import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Supersimple, accueil" />
    <main id="main" class="flex-centered">
      <div class="main-content">
        <h1>Supersimple, agence de sensibilisation et formation à l'accessibilité, l'ergonomie, les performances, l'éco-conception et l'éthique.</h1>
        <p>Nous proposons des ateliers et un accompagnement adapté aux entreprises, start-ups, indépendants et institutions afin d'appréhender ces bonnes pratiques qui favorisent l'expérience et l'adhésion de vos audiences.</p>
      </div>
    </main>
    <section id="#demarche">
      <div class="inner">
        <h2>Notre démarche</h2>
        <p>Nous sommes conscient qu'il n'est pas toujours aisé d'appréhender ces thématiques et que les mettre en place peut être un véritable défi technique et financier. Pour ces raisons, nous favorisons un accompagnement adapté et une progression étape par étape.</p> 
        <p><Link to="/contact/">Contactez-nous pour de plus amples informations</Link></p>
      </div>
    </section>
    <section id="#demarche">
      <div class="inner">
        <h2>Notre expériencce</h2>
        <p>Supersimple est un constat que nous avons eu suite à nos dix années en tant qu'agence de développement web. Nous travaillons sur ce concept depuis maintenant quatre ans et avons déjà accompagné différentes équipes :</p> 
        <ul class="client-list">
            <li>AG Insurance</li>
            <li>Agence du Numérique (ex-AWT)</li>
            <li>Asmodée Benelux</li>
            <li>Bio Wallonie</li>
            <li>BNP Paribas Fortis</li>
            <li>Booking</li>
            <li>Fédération Wallonie Bruxelles</li>
            <li>Fondation Roi Baudouin</li>
            <li>Global Wellness Day</li>
            <li>Groupe PSA</li>
            <li>Groupe Rossel</li>
            <li>Groupe VOG</li>
            <li>L'oréal professionnel</li>
            <li>Les rencontres inattendues</li>
            <li>Proximus</li>
            <li>Ramdam Festival</li>
            <li>Tip Touch International</li>
            <li>Ville de Péruwelz</li>
            <li>Ville de Tournai</li>
            <li>VOO</li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default IndexPage
