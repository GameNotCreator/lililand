import Image from 'next/image'
import Link from 'next/link'

const Why = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <Image priority quality={100} unoptimized className="lg:flex hidden w-1/2 h-1/2 mt-20" width={100} height={100} src={'/objectif.jpeg'} alt="Logo Footer"/>
      <div>
        <h1 className="mt-40 text-5xl font-bold">Pourquoi le faisons-nous ?</h1>
        <br/>
        <h2 className="text-3xl">Les axes stratégiques du Rotary</h2>
        <h4 className="text-1xl"><i>On se bat pour plusieurs raisons...</i></h4>
        <ul>
          <li className="pt-6 pb-4"> • Résolution des conflits</li>
          <li className="pb-4"> • Prévention et traitement des maladies</li>
          <li className="pb-4"> • Eau et assainissement</li>
          <li className="pb-4"> • Santé de la mère et de l'enfant</li>
          <li className="pb-4"> • Alphabétisation et éducation de base</li>
          <li className="pb-4"> • Développement économique et local</li>
          <li className="pb-4"> • Environnement</li>
        </ul>
        <i>Pour en savoir sur ces causes, cliquez <Link className='text-blue-500' href="https://www.rotary.org/fr/our-causes">ici</Link></i>
        <br/>
        <button className="mt-5 btn btn-primary btn-outline"><Link href={'how'}>Comment ?</Link></button>
      </div>
      <Image priority quality={100} unoptimized className="w-1/2 h-1/2 lg:hidden m-5 flex" width={100} height={100} src={'/objectif.jpeg'} alt="Logo Footer"/>
    </div>
  </div>
  )
}

export default Why