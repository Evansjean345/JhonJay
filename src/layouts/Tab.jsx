import React from "react";

const products = [
  {
    id: 1,
    name: "Faha Jhon Jay",
    Src: "https://www.youtube-nocookie.com/embed/I2eAoDJndRg",
    color: "emission Tv",
  },
  {
    id: 2,
    name: " La famille DJOUDJOU dans du coq à l’âne",
    Src: "https://www.youtube-nocookie.com/embed/IFnfNZAcLC4",
    color: "[C'Midi]",
  },
  {
    id: 3,
    name: "Le Micro-trottoir by Yéyé magazine",
    Src: "https://www.youtube-nocookie.com/embed/sM2aaoWk1l8",
    color: "Un Patriote",
  },
  {
    id: 4,
    name: "Le Micro-trottoir by Yéyé magazine",
    Src: "https://www.youtube-nocookie.com/embed/WgsdhIEPi8k",
    color: "LEITMOTIV- Invité: John Jay (1ère Partie)",
  },
  // More products...
];

export default function Tab() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Retrouvez ici vos Emissions Préférés
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <iframe src={product.Src} key={product.id} className="group relative h-[330px] w-full rounded-xl">
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 font-bold">
                      {product.color}
                    </p>
                  </div>
                </div>
              </iframe>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
