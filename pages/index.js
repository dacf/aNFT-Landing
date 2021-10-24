import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroBackground from '../components/HeroBackground'
import Subscribe from '../components/Subscribe'
import Explainer from '../components/Explainer'
import Discord from '../components/Discord'
import Footer from '../components/Footer'

export default function Home() {
  const AutoNetwork = "Autonomy is a descentralized network for automated conditional ordering. It is built on users, executors and the blockchain."
  return (
    <div className="bg-gray-50">
      <div className="relative bg-black oveflow-hidden">
        <HeroBackground/>
          <Layout>
            <Hero/>
          </Layout>
      </div>
      <div className="bg-black">
        <Discord/>
      </div>
      <div className="py-16 bg-black overflow-hidden">
        <Explainer/>
      </div>
      <div className="bg-black">
        <Footer/>
      </div>
    </div>
  )
}
