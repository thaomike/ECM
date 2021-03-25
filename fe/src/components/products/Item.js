import React from 'react'

const Item = ({pro}) =>{
    return (
        <li>
            <ul>
            <li>{pro.name}</li>
            <img src={pro.img}/>
            <li><button>add</button></li>
            </ul>
        </li>
    ) 
}
export default Item