import React from 'react'
import "../productlist/productlist.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <p className="pl-desc">I like development and I have made some projects too. Some of them are shown below</p>
        </div>
        <div className="pl-list">
          {products.map((item)=>(
              <Product key={item.id} img={item.img} link={item.link}/>
          ))}
            
        </div>
    </div>
  )
}

export default ProductList