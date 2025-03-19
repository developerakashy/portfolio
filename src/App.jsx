import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useEffect, useRef, useState } from 'react'

function App() {
  const tabs = ['/', '/about', '/tech', '/projects', '/footer']
  const [activeTab, setActiveTab] = useState('/')
  const pageRefs = useRef([])


  useEffect(() => {

    const handleScroll = () => {
      let currentSection = 0

      pageRefs.current.forEach((page, index) => {
        const rect = page.getBoundingClientRect()

        if(rect.top <= 100 && rect.bottom >= 100){
          currentSection = index
        }
      })

      setActiveTab(tabs[currentSection])

    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])



  return (
    <>
      <Header pageRefs={pageRefs} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Hero pageRefs={pageRefs}/>
      <About pageRefs={pageRefs}/>
      <Tech pageRefs={pageRefs}/>
      <Projects pageRefs={pageRefs}/>
      <Footer pageRefs={pageRefs}/>
    </>
  )
}

export default App
