import Image from 'next/image'
import Link from 'next/link'

const Why = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image width={500} height={500} src={'https://i.imgur.com/6bYsxHn.png'} alt="Logo Footer"/>
        <div>
          <h1 className="text-5xl font-bold">Pourquoi le faisons-nous ?</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>
  )
}

export default Why