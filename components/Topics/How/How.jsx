import Link from 'next/link';
import ImageContainer from "./ImageContainer";

const How = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="mt-40 text-5xl font-bold">Comment le faisons-nous ?</h1>
          <br/>
          <h2 className="text-3xl mb-2">"Servir d'abord!" tel est notre devise</h2>
          <h4 className="text-1xl"><i>On effectue plusieurs actions...</i></h4>
          <h3 className="mt-10 text-3xl font-bold">Nos actions phares</h3>
          <ul>
            <li className="pt-6 pb-4 text-2xl"> • 9ofet Romdhan</li>
            <li><p><i>Cette action consiste a recolter de la nourriture pour les personnes au besoin durant la periode de Ramadan.</i></p></li>
            <div className="flex flex-row w-full">
              <li><ImageContainer src={'/images/417239948_7327388570656083_1737478582680551822_n.jpg'} alt="Logo Footer"/></li>
              <li><ImageContainer src={'/images/416717944_222125490947925_8372003302367834799_n.jpg'} alt="Logo Footer"/></li>
            </div>
            <li className="pb-4 text-2xl"> • Rentree scolaire</li>
            <li><p><i>Cette action consiste a recolter des fournitures pour la rentree scolaire pour les enfants qui ne peuvent pas s'en procurer.</i></p></li>
            <div className="flex flex-row w-full">
              <li><ImageContainer src={'/images/416810954_297881579463218_325376313698445584_n.jpg'} alt="Logo Footer"/></li>
              <li><ImageContainer src={'/images/415264486_1098430924683262_6444020529977743263_n.png'} alt="Logo Footer"/></li>
            </div>
            <li className="pb-4 text-2xl"> • Hiver aux chauds</li>
            <li><p><i>Cette action consiste a recolter des vetements pour les personnes au besoin en Hiver.</i></p></li>
            <div className="flex flex-row w-full">
              <li><ImageContainer src={'/images/416770802_1141538226833417_6020993913890341167_n.jpg'} alt="Logo Footer"/></li>
              <li><ImageContainer src={'/images/416809644_1552631015489232_2445728161412158773_n.jpg'} alt="Logo Footer"/></li>
            </div>
          </ul>
          <h3 className="mt-10 text-3xl font-bold">Autres actions...</h3>
          <ul>
            <li className="pt-6 pb-4 text-2xl"> • Nettoyage en foret</li>
            <div className="flex flex-row w-full">
              <li><ImageContainer src={'/images/415418788_1039951260451406_7389007138263446165_n.png'} alt="Logo Footer"/></li>
              <li><ImageContainer src={'/images/313814310_3218207241775844_4332056124839053931_n.jpg'} alt="Logo Footer"/></li>          
            </div>
            <button className="mt-5 mb-5 btn btn-primary btn-outline"><Link href={'https://www.instagram.com/p/Ckd_1mvqDnK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}>En savoir plus sur cette action</Link></button>
           
            <li className="pb-4 text-2xl"> • Visite en maison de retraite</li>
            <div className="flex flex-row w-full">
              <li><ImageContainer src={'/images/313096367_809994023625110_6851258073543030474_n.jpg'} alt="Logo Footer"/></li>
              <li><ImageContainer src={'/images/416756637_733983348666098_5373827198317272916_n.jpg'} alt="Logo Footer"/></li>
            </div>
            <button className="mt-5 mb-5 btn btn-primary btn-outline"><Link href={'https://www.instagram.com/p/CkTsry5KXiq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}>En savoir plus sur cette action</Link></button>

            <li className="pb-4 text-2xl"> • Nettoyage en plage</li>
            <div className="flex flex-row w-full">
              <li><ImageContainer src={'/images/272631381_456220916033395_4231507519470166466_n.jpg'} alt="Logo Footer"/></li>
              <li><ImageContainer src={'/images/272762197_1046544105909342_2182161664632741391_n.jpg'} alt="Logo Footer"/></li>
            </div>
            <button className="mt-5 mb-5 btn btn-primary btn-outline"><Link href={'https://www.instagram.com/p/CZPYsmPKSNV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}>En savoir plus sur cette action</Link></button>
            
            <li className="pb-4 text-2xl">Et plus encore...</li>
            <button className="mt-5 mb-5 btn btn-primary btn-outline"><Link href={'https://www.instagram.com/interact_club_marsa_mind/'}>En savoir plus sur nos actions sur instagram</Link></button>
            <li className="pb-4 text-2xl">Nos prochaines actions</li>
            <button className="mt-5 mb-5 btn btn-primary btn-outline"><Link href={'when'}>Quand ?</Link></button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default How;
