import Link from "next/link"

const Donation = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.imgur.com/uvUkHUf.png)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Faire un don </h1>
          <p className="mb-5">Ceci servira a accomplir plusieurs actions charitatives et humanitaires</p>
          <button className="btn btn-primary"><Link href={'contact'}>Cliquez ici ❤️</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Donation