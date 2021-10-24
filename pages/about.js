import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroBackground from '../components/HeroBackground'
import Subscribe from '../components/Subscribe'
import Explainer from '../components/Explainer'
import Team from '../components/Team'

export default function About() {
  const AutoNetwork = "Autonomy is a descentralized network for automated conditional ordering. It is built on users, executors and the blockchain."
  return (
    <div className="bg-gray-50">
      <div className="relative bg-black oveflow-hidden">
          <Layout>
            <Team/>
          </Layout>
      </div>
    </div>
  )
}
