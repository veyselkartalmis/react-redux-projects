import React from 'react'
import "./navbar.scss";
import { useSelector } from "react-redux";

function Navbar() {
  let money = useSelector((state) => state.product.money);
  return (
    <div className='navbar'>
      <h1>{money} $</h1>
    </div>
  )
}

export default Navbar