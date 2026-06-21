import Hero            from '../components/Hero'
import About           from '../components/About'
import Projects        from '../components/Projects'
import EducationAwards from '../components/EducationAwards'
import CV              from '../components/CV'
import Contact         from '../components/Contact'

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <EducationAwards />
      <CV />
      <Contact />
    </>
  )
}