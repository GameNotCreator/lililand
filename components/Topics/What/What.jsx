import Image from "next/image"
import logofooter from "@public/logofooter.png"

const What = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image priority quality={100} unoptimized className="w-1/2 h-1/2 lg:flex hidden" width={100} height={100} src={logofooter} alt="Logo Footer"/>
        <div>
          <h1 className="mt-40 text-5xl font-bold">Que sommes-nous ?</h1>
          <br/>
          <h2 className="text-4xl">Le Club Interact Marsa Mind, qu'est-ce que c'est ?</h2>
          <h4 className="text-1xl"><i>Bienvenue sur la page d'accueil du Club Interact Marsa Mind, une association à but non lucratif fondée le 17 septembre 2020 et parrainée par le Rotary Club La Marsa.</i></h4>
          <p className="py-6">Le Rotary, une organisation bénévole mondiale créée par Paul Harris, parraine l'intégralité des clubs Interact. Notre mission principale est d'apporter notre aide à ceux qui sont dans le besoin à travers une variété d'initiatives communautaires et de projets bénévoles. Nos actions englobent diverses causes telles que les droits de l'enfant, les ressources pour les personnes dépourvues, les droits des femmes, et bien d'autres encore.</p>
          <p className="py-6">Le Club Interact Marsa Mind est fondé sur des valeurs fondamentales telles que le leadership, l'intégrité, la camaraderie, la diversité et le service. En tant que club de service, tous nos membres s'engagent à servir la communauté et à participer activement à des projets humanitaires.</p>
          <p className="py-6">Rejoignez-nous dans notre quête commune pour faire une différence significative dans le monde qui nous entoure. En explorant ce site, vous découvrirez davantage notre histoire, nos projets en cours et les différentes manières dont vous pouvez vous impliquer.</p>
        </div>
        <Image priority quality={100} unoptimized className="w-1/2 h-1/2 lg:hidden m-5 flex" width={100} height={100} src={logofooter} alt="Logo Footer"/>
      </div>
    </div>
  )
}

export default What
