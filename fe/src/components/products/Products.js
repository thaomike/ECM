import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from './Item';

const Products = ({id}) => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/page/${id}`)
        .then(res => {
            setProduct(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      },[id])
    
        return(
        <div>
            <ul>
                {product.map((pro) => <Item pro = {pro}/>)}
            </ul>
            
        </div>
    )
}
export default Products