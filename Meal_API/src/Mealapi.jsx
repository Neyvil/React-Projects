import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import "./index.css";

function Meal() {
  const [item,setItems]=useState([])

  useEffect(()=>{
    axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res=>{
      setItems(res.data.meals)
      console.log(res.data)
      
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const itemlists=item.map(({strMeal,strMealThumb,idMeal})=>{
    return(
      
      <section className="card">
        <img src={strMealThumb}/>
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    )
  })

  return <>
  <h1>FOOD MENU</h1>
  <div className="items-container">{itemlists}</div>
  </>
}

export default Meal;
