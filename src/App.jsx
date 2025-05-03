import { useEffect, useState } from 'react'
import Card from './Card'

function App() {
  const [products, setProducts] = useState([])

  const url = `https://dummyjson.com/products?limit=100`

  const fetchUrl = async(u) => {
    let resp = await fetch(u)
    let data = await resp.json()
    setProducts(data.products)
  }

  useEffect(() => {
    fetchUrl(url)
  },[])

  

  return (
    <>
      <Card data={products}/>
    </>
  )
}

export default App
