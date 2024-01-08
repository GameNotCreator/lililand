import Link from "next/link"

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url(https://i.imgur.com/d7dblvG.png)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Interact Club Marsa Mind</h1>
            <ul className="py-6 decoration-none">Nonprofit organization
              <li>🔅 Parrainé par le club @rotarylamarsa</li>
              <li>🔅 DISTRICT : 9010 </li>
              <li>🔅 Charte obtenue le 17/09/20</li>
            </ul>
            <button className="btn btn-primary"><Link href={'/pages/'}>En savoir plus</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Home