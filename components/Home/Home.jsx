import Link from "next/link"

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url(/home.jpeg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Lili Land la marsa</h1>
            </div>
        </div>
    </div>
  )
}

export default Home