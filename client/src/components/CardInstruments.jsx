import React, { useEffect, useState } from "react"
import axios from "axios"
import SelectInstrumentsCategory from "./SelectInstrumentsCategory"

const CardInstruments = () => {
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
      <h1>instrument</h1>
      <SelectInstrumentsCategory setSelectedCategory={setSelectedCategory} />
      <div className="cards-container">
        {instruments.map((inst) => (
          <div key={inst._id} className="card">
            <img src={inst.imageUrl} alt={inst.name} />
            <h3>{inst.name}</h3>
            <p className="category">{inst.category}</p>
            <p className="price">₪{inst.price}</p>
            <button className="add-to-cart">הוסף לעגלה</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardInstruments
