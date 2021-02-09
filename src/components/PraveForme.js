import React, { useRef ,Component, useState} from 'react'
import BookList from './BookList'
import './forma.css'

function PraveForme() {
       const [books,setBooks]=useState([])
       const [book,setBook]=useState({title:'',author:'',isbn:''})
       const handleChange = (e)=>{
        const name=e.target.name
const value=e.target.value
setBook({...book,[name]:value}) 
       }
       
       const handleSubmit=(e)=>{
            e.preventDefault()
            if(book.title && book.author && book.isbn){
                const newBook={...book,id:new Date().getTime.toString()}
                setBooks([...books,newBook])
                setBook({title:'',author:'', isbn:''})
            }
        }
        
        
    return (
        <div className='forme'>
            <div className='inputi'>
            <h1 className='h1-title'> Book Title</h1>
                    <input    type='text'  placeholder='Book Title' onChange={handleChange} value={book.title} name='title' className='input-title'/>
                    <h1 className='h1-author'> Book Author</h1>
                    <input type='text'  placeholder='Book Author' onChange={handleChange} value={book.author} name='author' className='input-author'/>
                    <h1 className='h1-isbn'>ISBN</h1>
                    <input type='text'   placeholder='ISBN' onChange={handleChange} value={book.isbn} name='isbn' className='input-isbn'/>
                    <button type='submit'  onClick={handleSubmit}  className='dugme'>Add Book</button>
            </div>
            <div className='tabele'>

            <table >
                               <tbody>
  <tr className='glavna'>
    <th>Book Title</th>
    <th>Book Author</th> 
    <th>ISBN</th>
  </tr>
  
                      {books.map((book,index)=>{
                        const {id ,title,author,isbn}=book
                        return (<tr key={id}>
                            <th>{title}</th>
                            <th>{author}</th>
                            <th>{isbn}</th>
                        </tr>)
                      })}
                    
 </tbody>
</table>
            </div>
        </div>
    )
}

export default PraveForme
