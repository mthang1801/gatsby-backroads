import React from "react"
import Layout from "../components/layout"
import SimpleHero from "../components/simple-hero"
import Banner from "../components/banner";
import {Link} from "gatsby"
import About from "../components/Home/about"
import Services from "../components/Home/services"
export default function Home() {
  return <Layout>
    <SimpleHero>
      <Banner title="Continure Exploring" info="Lorem, ipsum dolor sit amet consectetur adipisicing elit.">
        <Link to="/tours" className="btn-white">Exploring Tours</Link>
      </Banner>
    </SimpleHero>
    <About/>
    <Services/>
  </Layout>
}
