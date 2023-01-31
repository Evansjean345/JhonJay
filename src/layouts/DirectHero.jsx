import React from "react";

export default function DirectHero() {
  return (
    <> 
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full">
                <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">Direct</p>
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2"> Regardez en direct les emissions Tv de la chaine Tam Tam Tv </h2>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <iframe className="lg:block hidden w-full h-[60vh] rounded-xl" src="https://www.youtube-nocookie.com/embed/hSzs_QHst1g" alt="Group of people Chilling" />
                <iframe className="lg:hidden sm:block hidden w-full h-[60vh] rounded-xl" src="https://www.youtube-nocookie.com/embed/hSzs_QHst1g" alt="Group of people Chilling" />
                <iframe className="sm:hidden block w-full h-[60vh] rounded-xl" src="https://www.youtube-nocookie.com/embed/hSzs_QHst1g" alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Show Bizz en Cote d'ivoire</h2>
                    <p className="font-normal  leading-6 text-gray-600 mt-4 text-xl">Show Biiz en Ci y'a probleme</p>
                    <p className="font-normal  leading-6 text-gray-600 mt-4 text-xl">retrouvez ici la dernière actualité présenté par Jhon Jay publiées recemment</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <iframe className="lg:block hidden w-full h-[60vh] rounded-xl" src="https://www.youtube-nocookie.com/embed/hdxtHhN8rU8" alt="people discussing on board" />
                    <iframe className="lg:hidden sm:block hidden w-full h-3/4 rounded-xl" src="https://www.youtube-nocookie.com/embed/hdxtHhN8rU8" alt="people discussing on board" />
                    <iframe className="sm:hidden block w-full rounded-xl" src="https://www.youtube-nocookie.com/embed/hdxtHhN8rU8" alt="people discussing on board" />
                </div>
            </div>
        </div>
    </>
  );
}
