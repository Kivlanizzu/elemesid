import Header from '../components/Header'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
import TrendingList from '../components/TrendingList'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryList />
      <TrendingList />
      <Footer />
    </div>
  )
}
