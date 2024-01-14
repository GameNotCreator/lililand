import Image from "next/image"
import logofooter from "@public/logofooter.png"
import Hierarchy from "./Hierarchy"

const Who = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <br /><br />  
      <br /><br />  
      <br /><br />  

        <Image width={500} height={500} src={logofooter} alt="Logo Footer"/>
        <div>
          <br /><br />  
          <br /><br />  
          <h1 className="text-5xl font-bold text-center">Qui sommes-nous ?</h1>
          <br /><br />  
          <Hierarchy />
          <br /><br />  
      </div>
      </div>
    </div>
  )
}

export default Who