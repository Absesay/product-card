import React from "react"
import ReactDom from "react-dom"

ReactDom.render(
<div className="card">
  <img alt="lover"/>
  <header>
    <h1>Dualshock 4 Midnight Blue</h1>
    <h4>$55</h4>
  </header>
  <div className="productRating">
    <i className="prod-icon"></i>
  </div>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book.
  </p>
  <button type="button">Add Cart</button>
</div>,document.getElementById("root"))
