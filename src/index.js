import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

function BookList(){
    return (
        <section>
            This is a bookList
            <article className='bookList'>
                <Book/>
                <Book/>

            </article>
        </section>
    )
}
const Book = () =>{
    return(
        <div className='book'>
            <Image/>
            <Title/>
            <Author/>
            <Price/>
        </div>
    )
}
const Image = () =>{
    return(
        <div>
            <img src='https://m.media-amazon.com/images/I/41mo3-FGjXL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'></img>
        </div>
    )
}
const title = 'Harry Potter'
const Title = () =>{
    return(
        <div>
            <h1>{title.toUpperCase()}</h1>
        </div>
    )
}
const Author = () =>{
    const author = 'J. K. Rowling'

    return(
        <div>
            <h1 style={{color:'red',fontSize:'0.75rem'}}>{author}</h1>
        </div>
    )
}
const Price = () => <h1>38.98$</h1>
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<BookList/>)