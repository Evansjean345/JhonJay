import React from 'react'

export default function HeroHome() {
  return (
   <div>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="http://ekladata.com/geZFqxbi5Ap3JJcTZkLxnkZ-bnY.jpg" className=" rounded-lg shadow-2xl lg:w-[50%]" />
    <div>
      <h1 className="text-5xl font-bold">Bienvenue </h1>
      <p className="py-6 text-xl">Sur la Page Officielle de Jhon Jay retrouvez ici vos séries télés en reddifusion et en direct</p>
      <button className="btn btn-primary">Voir Plus</button>
    </div>
  </div>
</div>
   </div>
  )
}
