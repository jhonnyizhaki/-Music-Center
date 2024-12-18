import React, { useState, useEffect } from "react"
import axios from "axios"
import SelectInstrumentsCategory from "../components/SelectInstrumentsCategory"

const Instruments = () => {
  const [instruments, setInstruments] = useState([]) // שם הסטייט מתוקן
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/instruments") // בדוק שהנתיב נכון
        setInstruments(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching instruments:", error)
        setError("Error loading instruments")
        setLoading(false)
      }
    }

    fetchInstruments()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
  
  

    <div className="instrumentH1">
 <h1>Instruments</h1>
 <SelectInstrumentsCategory />
    <div className="cards-container">
    
      {instruments.map((instrument) => (
       
       <div key={instrument._id} className="card">
         <img src={instrument.imageUrl} alt={instrument.name} />
         <h3>{instrument.name}</h3>
         <p className="category">{instrument.category}</p>
         <p className="price">₪{instrument.price}</p>
         <button className="add-to-cart">הוסף לעגלה</button>
         
       </div>
      
     ))}
      </div>
    
    </div>
  )
}

export default Instruments
