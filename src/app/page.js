// src/app/page.js

import Hero            from '../components/Hero'
import About           from '../components/About'
import Skills          from '../components/Skills'
import EducationAwards from '../components/EducationAwards'
import Projects        from '../components/Projects'
import Blog            from '../components/Blog'
import CV              from '../components/CV'
import Contact         from '../components/Contact'
import { getBlogPosts } from '../lib/blogspot'

export default async function Home() {
  const blogPosts = await getBlogPosts(3)

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <EducationAwards />
      <Projects />
      <Blog posts={blogPosts} />
      <CV />
      <Contact />
    </>
  )
}
