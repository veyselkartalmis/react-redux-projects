import React from 'react'
import "./style.scss";

function Item({item}) {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
    </li>
  )
}

export default Item