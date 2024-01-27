import Image from 'next/image'
import Link from 'next/link'

const When = () => {
  return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(/working.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Page en cours de developpement...</h1>
    </div>
  </div>
</div>

  )
}

export default When