
//Quando o componente está exportado por default não se coloca a chave na importação, porém quando o mesmo não é exportado por padrão, se obriga a utilizar as chaves
import { Hero } from "./components/Hero"
import { About } from './components/About'
import { Contact } from "./components/Contact"

import { Projects } from "./components/Projects"
import { Service } from "./components/Service"
import { Skills } from "./components/Skills"
import { Testimonials } from "./components/Testimonials"

import "./App.css"



function App() {
  return (
    //Quando se utiliza a TAG (main), está dizendo ao browser que esta é a TAG principal. Também poderia usar "div"
    <main> 
      <Hero />
      <About />
      <Service />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App
