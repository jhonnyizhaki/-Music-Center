import React, { useEffect, useState } from "react"
import axios from "axios"
import SelectInstrumentsCategory from "./SelectInstrumentsCategory"
import Instruments from "../pages/Instruments"

const ShopCart = () => {
  const [instruments, setInstruments] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  const fetchInstruments = async () => {
    try {
      const url = selectedCategory
        ? `http://localhost:5000/instruments?category=${selectedCategory}`
        : "http://localhost:5000/instruments"

      const { data } = await axios.get(url)
      setInstruments(data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  useEffect(() => {
    fetchInstruments()
  }, [selectedCategory])

  return (
    <div>
      <h1>Products</h1>
      <SelectInstrumentsCategory setSelectedCategory={setSelectedCategory} />
      <div className="cards-container">
        {instruments.map((inst) => (
          <div key={inst._id} className="card">
            <img src={Instrument.imageUrl} alt={Instrument.name} />
            <h3>{Instrument.name}</h3>
            <p className="category">{Instrument.category}</p>
            <p className="price">₪{Instrument.price}</p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopCart




