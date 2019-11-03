import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Supersimple, nous contacter" />
    <main id="main" class="flex-centered">
      <div class="main-content">
        <h1>Nous contacter</h1>
        <p>N'hésitez pas à nous contacter pour tout complément d'information ou pour recevoir une offre sur mesure. Nous reprendrons contact avec vous afin de bien comprendre votre projet, vos produits et vos services. Chacune de nos mission débute par un audit.</p>
      </div>
    </main>
    <section>
        <h2>Comment nous contacter ?</h2>
        <p>Nous sommes joignables par e-mail à l'adresse <a href="mailto:contact@supersimple.be"><strong>contact@supersimple.be</strong></a>.</p>
        <p> Comme nous sommes le plus souvent en déplacement pour des ateliers et des formations, nous ne fournissons pas de numéro de téléphone. Vous aurez toutefois une personne de contact dédiée dès le début de votre accompagnement.</p>
    </section>
  </Layout>
)

export default ContactPage
