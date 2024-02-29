"use client"
import Grid from "@components/Attractions/Grid"
import Contact from "@components/Contact/Contact"
import Formules from "@components/Formules/Formules"
import Home from "@components/Home/Home"
import Partenaire from "@components/Partenaire /Partenaire"

const Homepage = () => {
  return (
    <>
      <section className="bg-cyan-500 w-full flex-center flex-col">
        <div className="card w-96 w-full">
            <div className="card-body items-center text-center">
      <Home id="#Home" />
      <Grid id="#Attractions"/>
      <Formules id="#Formules"/>
      <Partenaire id="#Partenaires"/>
      <Contact id="#Contact"/>
        </div>
    </div>
    </section>
  
    </>
  )
}

export default Homepage