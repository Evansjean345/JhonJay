import React from 'react'
import "../App.css"

export default function HeroTv() {
  return (
    <>
             <div
        className="hero h-[60vh] relative bg-contain"
        style={{
          backgroundImage: `url("https://www.africanaute.com/wp-content/uploads/2019/01/Jay-3.jpg")`,
        }}
      >
        <div className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-12  pl-4 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]">
          <div id="div-trailer-movies-one">
            <h1 className="sm:text-3xl text-xl">
              <b>
                Retrouvez vos
                <br />
                influenceurs et
                <br />
                influenceuses ici
              </b>
            </h1>
          </div>
          <div id="div-trailer-movies-two">
            <h1 className="sm:text-3xl text-xl">
              <b>
                Retrouvez vos
                <br />
                influenceurs et influenceuses ici
              </b>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
