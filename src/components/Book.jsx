import React from 'react'

function Book(props) {
  const { image, title, author, id } = props
  return (
    <article className="bg-white rounded-2xl p-4 text-center relative">
      <img
        className="w-full h-2/3 object-contain place-content-center mt-2"
        src={image}
      ></img>
      <h2 className="mt-4 text-base font-bold">{title}</h2>
      <h4 className="font-light mt-1">{author}</h4>
      <span className="absolute top-0 left-0 bg-amber-300 rounded-tl-2xl rounded-br-2xl p-1">{`#${id}`}</span>
    </article>
  )
}

export default Book
