import Layout from './components/layout'
import Header from './components/Header'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

export default function HomePage() {
    return (
        <Layout title="Welcome to vignelli resume">
            <Header></Header>
            <Showcase></Showcase>
            <CTA></CTA>
        </Layout>
    )
}