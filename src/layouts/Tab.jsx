import React from "react";

const products = [
  {
    id: 1,
    name: "Faha Jhon Jay",
    imageSrc: "https://www.youtube-nocookie.com/embed/I2eAoDJndRg",
    color: "emission Tv",
  },
  {
    id: 2,
    name: " La famille DJOUDJOU dans du coq à l’âne",
    imageSrc: "https://www.youtube-nocookie.com/embed/IFnfNZAcLC4",
    color: "[C'Midi]",
  },
  {
    id: 3,
    name: "Le Micro-trottoir by Yéyé magazine",
    imageSrc: "https://www.youtube-nocookie.com/embed/sM2aaoWk1l8",
    color: "Un Patriote",
  },
  {
    id: 4,
    name: "Le Micro-trottoir by Yéyé magazine",
    imageSrc: "https://www.youtube-nocookie.com/embed/WgsdhIEPi8k",
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
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <iframe
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-xl"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                  />
                </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
