import React from 'react'
import Book from './Book'
import { books } from './Books'

function Booklist() {
  return (
    <div>
      <h1 className="text-center mt-16 capitalize text-xl font-bold">
        amazon best sellers
      </h1>
      <section className="w-[90vw] max-w-[1000px] my-20 mx-auto grid gap-8 md:grid-cols-3">
        {books.map((book) => {
          console.log(book)
          return <Book {...book} key={book.id}></Book>
        })}
      </section>
    </div>
  )
}

export default Booklist
