import Image from "next/image";

const Card = ({titre, image, age, prix, temps}) => {
  return (
    <div>
      <div className="card h-full text-white max-w-96 p-100 m-10 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={'/Attractions/' + image}
            alt={titre}
            width={800}
            height={800}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{titre}</h2>
          <p className="text-l">{titre == 'Tour de poney' ?  "Grand tour : " + age.grand_tour + " | " + temps.grand_tour + " | " + prix.grand_tour + " lili" : age + ' | ' + temps + " | " + prix + " lili" } { titre == 'Tour de poney' ?  "\n" + "Petit tour : " + age.petit_tour + " | " + temps.petit_tour + " | " + prix.petit_tour + " lili" : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
