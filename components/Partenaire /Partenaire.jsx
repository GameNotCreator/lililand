import Image from 'next/image';
const Partenaire = () => {
    const Partenaire = ['/Partenaires/wonderland.png', '/Partenaires/restaurant.png', '/Partenaires/buvette.png', '/Partenaires/jeux.png']

  return (
    <div className="bg-cyan-500">
      <h2
        className="text-center text-4xl font-bold text-white p-5"
        id="Partenaires"
      >
        Partenaires
      </h2>
      <h3 className="text-center text-2xl font-bold text-white p-5">
        Découvrez nos partenaires
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Partenaire.map((img, index) => (
          <Image
            className="p-10 m-3"
            src={img}
            width={450}
            height={500}
            alt="Formule"
          />
        ))}
      </div>
    </div>
  );
};

export default Partenaire;
