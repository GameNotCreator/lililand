import Image from 'next/image'
import Link from 'next/link'

const When = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">  
      <div>   
        <h1 className="mt-40 text-4xl font-bold text-center">Quand agissons-nous ?</h1>
        <div className='sm:flex hidden'>
          <br /><br />
        </div>
        <center>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=Europe%2FParis&showTitle=0&showPrint=0&showTabs=0&showTz=0&showCalendars=0&src=ZTI1YzVlZTIwYTg0ZmZiNTFiYWIwZTk2MDY4YTQ1OTUwMDVmMzBmZDg2NjJjOGQ5YTc2OTUyMTU4NmEwNzJiNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"          style={{ borderWidth: 0 }}
          width="800"
          height="600"
          className='sm:flex hidden'
          frameborder="0"
          lang="fr"
          scrolling="no"
        ></iframe>
        <br /><br />  
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=Europe%2FParis&showTitle=0&showPrint=0&showTabs=0&showTz=0&showCalendars=0&src=ZTI1YzVlZTIwYTg0ZmZiNTFiYWIwZTk2MDY4YTQ1OTUwMDVmMzBmZDg2NjJjOGQ5YTc2OTUyMTU4NmEwNzJiNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"          style={{ borderWidth: 0 }}
          className='sm:hidden w-full h-96'
          frameborder="0"
          lang="fr"
          scrolling="no"
        ></iframe>
        <div className='sm:hidden'>
          <br />
        </div>
        <i>Pour en savoir plus sur nos actions, cliquez <Link className='text-blue-500' href="https://www.instagram.com/interact_club_marsa_mind/">ici</Link></i>
        </center>
    </div>
    </div>
  </div>

  )
}

export default When