import React, { useState } from 'react'

const Fifteen = ({items}) => {
    const [searchTerm , setSearchTerm] = useState('');
    const filteredItems= items.filter((item)=>
        item.toLowerCase().includes(searchTerm.toLowerCase())
)
  return (
    <div>
      <input type="text" placeholder='search' onChange={(e)=>setSearchTerm(e.target.value)}/>
      <ul>
        {filteredItems.map((item,index)=>{
            <li key={index}>
            {item}
            </li>
        })}
      </ul>
    </div>
  )
}

export default Fifteen
