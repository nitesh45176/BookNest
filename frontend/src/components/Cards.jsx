import React from 'react'

function Cards({item }) {
   
  return (
    <>
    <div>
      <div className="card bg-base-100 w-96 mt-9 shadow-sm hover:scale-105 transition-all duration-500">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-blue-500 cursor-pointer px-3 py-3 hover:text-white">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards