import Image from "next/image"
const Formules = () => {
  const formules = ['/Formules/ecoles.png', '/Formules/anniversaires.png', '/Formules/entreprises.png ']
  return (
    <div className='bg-cyan-500'>
        <br /><br />
        <h2 className="text-center text-4xl font-bold text-white p-5" id="Formules">Formules</h2>
        <h3 className="text-center text-2xl font-bold text-white p-5">Découvrez nos formules</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {formules.map((formule, index) => (
              <Image className='p-10 m-3' src={formule} width={450} height={500} alt="Formule" priority/>
            ))}
        </div>
    </div>
  )
}

export default Formules