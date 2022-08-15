import React from 'react'
import "../productlist/productlist.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <p className="pl-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis beatae pariatur odio vitae debitis temporibus!</p>
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