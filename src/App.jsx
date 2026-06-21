import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import JobList from './components/JobList'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  return (
    <div>
      <Header />
      <Hero />

      <div className="container" style={{ marginTop: 48 }}>
        <FilterBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          search={search}
          setSearch={setSearch}
        />
      </div>

      <JobList activeCategory={activeCategory} search={search} />

      <HowItWorks />
      <Footer />
    </div>
  )
}
