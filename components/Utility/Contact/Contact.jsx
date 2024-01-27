import Link from "next/link"
const Contact = () => {
  return (
  <div className="hero min-h-screen" style={{backgroundImage: 'url(/contact.webp)'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Contactez-nous</h1>
        <p className="mb-5">Vous pouvez nous contacter via les réseaux sociaux ou par mail.</p>
        <div className="flex justify-center flex flex-col">
          <h3 className="mb-5 font-bold">Facebook</h3>
          <button className="btn btn-primary"><Link href={'https://www.facebook.com/InteractClubMarsaMind'}>@InteractClubMarsaMind</Link></button>
          <h3 className="mb-5 mt-5 font-bold">Instagram</h3>
          <button className="btn btn-primary"><Link href={'https://www.instagram.com/interactclubmarsamind/'}>@interactclubmarsamind</Link></button>
          <h3 className="mb-5 mt-5 font-bold">Mail</h3>
          <button className="btn btn-primary"><Link href={'mailto:interactmarsamind@gmail.com'}>interactmarsamind@gmail.com</Link></button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact