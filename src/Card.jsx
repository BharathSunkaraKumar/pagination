import React, { useState } from 'react'
import './Card.css'
function Card({data}) {
    const [pages, setPages] = useState(1)
    const handlePages = (selectedPage) => {
        if(selectedPage >= 1 && 
            selectedPage <= data.length / 10 && 
            selectedPage !== pages)
        setPages(selectedPage)
    }
  return (
    <div className='wrapper container'>
        <div className="title-pagination">
            <h1>pagination</h1>
        </div>
        <ul className='card wrapper'>
            {
                data.slice(pages * 10 - 10, pages * 10).map((eachItem) => {
                    const {thumbnail, title, id, price} = eachItem
                    return <li key={id} className='cards'>
                        <div className="image-thumbnail">
                        <img src={thumbnail} alt={title}/>
                        </div>
                        <i>{title}</i>
                        <p>Price: {price}</p>
                    </li>
                })
            }
        </ul>
        <div className='pagination'>
            <span className={pages > 1 ? "" : 'pagination_disable'} onClick={()=>{handlePages(pages-1)}}>⇦</span>
            {[...Array(data.length / 10)].map((_, i)=>{
                return <span className={pages === i + 1 && 'selectedPage'} onClick={()=>{handlePages(i+1)}} key={i}>{i+1}</span>
            })}
            <span className={pages < data.length / 10 ? "" : 'pagination_disable'} onClick={()=>{handlePages(pages+1)}}>⇨</span>
        </div>
    </div>
  )
}

export default Card