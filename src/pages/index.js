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
      <h2>Notre démarche</h2>
      <p>Nous sommes conscient qu'il n'est pas toujours aisé d'appréhender ces thématiques et que les mettre en place peut être un véritable défi technique et financier. Pour ces raisons, nous favorisons un accompagnement adapté et une progression étape par étape.</p> 
      <p><Link to="/contact/">Contactez-nous pour de plus amples informations</Link></p>
    </section>
  </Layout>
)

export default IndexPage
