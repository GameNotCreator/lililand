import Link from "next/link";

const Contact = () => {
    return (
      <div className="flex flex-col justify-center items-center bg-cyan-500 p-100">       
       <br /><br />
      <h2 className="text-center text-4xl font-bold text-white p-5" id="Contact">Contact</h2>
      <h3 className="text-center text-2xl font-bold text-white p-5">Contactez-nous</h3>
      <br />
      <p className="text-center text-xl text-white p-5">Mail : <Link href={"mailto:contact.lililandlamarsa@gmail.com"}>contact.lililandlamarsa@gmail.com</Link></p>
        <p className="text-center text-xl text-white p-5">Téléphone : <Link href={"tel:20249839"}>+21620249839</Link></p>
        <br />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.4271675979858!2d10.326179775841938!3d36.87849797222494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b492989f13e9%3A0x81e7b214d963f949!2sLily%20Land!5e1!3m2!1sfr!2stn!4v1708978558408!5m2!1sfr!2stn"
          width=" 350"
          height="450"
          className="rounded-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default Contact;
  