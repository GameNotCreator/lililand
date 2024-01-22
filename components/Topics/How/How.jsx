import Image from "next/image"
import logofooter from "@public/logofooter.png"

const How = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <Image width={500} height={500} src={logofooter} alt="Logo Footer"/>
        <div>
            <h1 className="text-5xl font-bold">Comment le faisons-nous ?</h1>
            <h2 className="text-3xl font-italic">"Servir d'abord!" tel est notre devise</h2>
            <br />
            <h3 className="text-2xl">Actions phares</h3>
            <div className="flex flex-row">
            <ul className="flex flex-col">
                <li>9ofet Romdhan</li>
                <p>Cette action consiste a recolter de la nourriture pour les personnes au besoin durant la periode de Ramadan.</p>
                <li>Rentree scolaire</li>
                <p>Cette action consiste a recolter des fournitures pour la rentree scolaire pour les enfants qui ne peuvent pas s'en procurer.</p>
                <li>Hiver aux chauds</li>
                <p>Cette action cosiste a recolter des vetements pour les personnes au besoin en Hiver.</p>
            </ul>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <Image width={500} height={500} src={'@public/images/416809644_1552631015489232_2445728161412158773_n.jpg'} alt="Logo Footer"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <Image width={500} height={500} src={logofooter} alt="Logo Footer"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <Image width={500} height={500} src={logofooter} alt="Logo Footer"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <Image width={500} height={500} src={logofooter} alt="Logo Footer"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default How